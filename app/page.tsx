import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Destinations } from "@/components/destinations"
import Chatbot from "@/components/chatbot"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Destinations />
      </main>
      <Footer />
      <Chatbot />
    </>
  )
}
