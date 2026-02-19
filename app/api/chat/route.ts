import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { message } = await req.json()

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [
          {
            role: "system",
            content: `
Tu es l'assistant virtuel de TimeTravel Agency, une agence de voyage temporel de luxe.

Ton ton :
- Professionnel
- Passionné d'histoire
- Élégant
- Enthousiaste

Destinations disponibles :

Paris 1889 – 4500€ / 3 jours
Découvre la Belle Époque, l’Exposition Universelle et l’inauguration de la Tour Eiffel.

Crétacé -65M – 9900€ / 2 jours
Explore la préhistoire, observe les dinosaures dans leur habitat naturel (encadrement sécurisé inclus).

Florence 1504 – 5800€ / 3 jours
Plonge au cœur de la Renaissance et découvre Michel-Ange en train de sculpter le David.

Ta mission :
- Conseiller les clients
- Répondre aux questions sur les prix
- Aider à choisir une destination selon leurs préférences
- Rester crédible, élégant et enthousiaste
            `,
          },
          {
            role: "user",
            content: message,
          },
        ],
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error("GROQ ERROR:", errorText)
      throw new Error("Groq API error")
    }

    const data = await response.json()

    return NextResponse.json({
      reply: data.choices?.[0]?.message?.content || "Aucune réponse reçue.",
    })
  } catch (error) {
    console.error("SERVER ERROR:", error)

    return NextResponse.json(
      { reply: "Une erreur est survenue avec l'assistant." },
      { status: 500 }
    )
  }
}
