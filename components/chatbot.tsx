"use client"

import { useState } from "react"

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Bonjour ✨ Je suis votre assistant TimeTravel Agency. Quelle époque souhaitez-vous explorer ?",
    },
  ])
  const [input, setInput] = useState("")

  const sendMessage = async () => {
    if (!input.trim()) return

    const userMessage = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      })

      if (!res.ok) {
        throw new Error("API error")
      }

      const data = await res.json()

      const botMessage = {
        role: "assistant",
        content: data.reply || "Aucune réponse reçue.",
      }

      setMessages((prev) => [...prev, botMessage])
    } catch (error) {
      console.error("CHATBOT ERROR:", error)

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Une erreur est survenue avec l'assistant.",
        },
      ])
    }

    setInput("")
  }

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-yellow-500 text-black px-4 py-3 rounded-full shadow-lg"
      >
        Chat
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 bg-black text-white p-4 rounded-xl shadow-2xl border border-yellow-500">
          <div className="h-64 overflow-y-auto mb-4 space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={
                  msg.role === "assistant"
                    ? "text-left text-yellow-400"
                    : "text-right text-white"
                }
              >
                {msg.content}
              </div>
            ))}
          </div>

          <div className="flex">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-2 bg-input text-foreground placeholder:text-muted-foreground rounded-l"
              placeholder="Posez votre question..."
            />
            <button
              onClick={sendMessage}
              className="bg-yellow-500 text-black px-3 rounded-r"
            >
              Envoyer
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
