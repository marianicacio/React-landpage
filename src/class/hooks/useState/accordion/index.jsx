import { useState } from "react"
import { ArrowDown, ArrowUp } from "lucide-react"
import './styles.css'

export default function Accordion() {
    const [isOpen, setIsOpen] = useState(true)

  return (
   <div className="accordion-container">
    <div className="accordion-title">
      <p>Novidade</p>
    {/* Se estiver aberto é um icone, caso fechado outro */}
    <button
    onClick={() => setIsOpen(!isOpen)}
    >{isOpen ? <ArrowUp color="white"/> : <ArrowDown color="white"/>}</button>
    </div>
    {/* e-comercial pq eu n mostro nada caso estiver falso */}
    {isOpen && (
      <div className="accordion-content">
      <p>Sei fazer um arccordion jsx com hooks</p>
      </div>
    )}
   </div>
  )
}