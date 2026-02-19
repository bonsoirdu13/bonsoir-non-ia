import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { message } = await req.json()

    const response = await fetch("https://api.mistral.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.MISTRAL_API_KEY}`,
      },
      body: JSON.stringify({
        model: "mistral-small-latest",
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

Destinations :
Paris 1889 – 4500€ / 3 jours
Crétacé -65M – 9900€ / 2 jours
Florence 1504 – 5800€ / 3 jours

Tu aides les clients à choisir leur destination et répondre à leurs questions.
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
      console.error("MISTRAL ERROR:", errorText)
      throw new Error("Mistral API error")
    }

    const data = await response.json()

    return NextResponse.json({
      reply: data.choices[0].message.content,
    })
  } catch (error) {
    console.error("SERVER ERROR:", error)

    return NextResponse.json(
      { reply: "Une erreur est survenue avec l'assistant." },
      { status: 500 }
    )
  }
}
