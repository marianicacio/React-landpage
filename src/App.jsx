import Brand from "./compoents/brand";
import Header from "./compoents/header"
import Main from "./compoents/main"
import Square from "./compoents/square";
import Hero from "./compoents/hero";
import Card from "./compoents/card"


export default function App() {
  return (
    <>
    <Header/>
    <Main/>
    <div className="app-container">
      <Hero aligment="right"/>
      <Hero />
      <Hero aligment="right"/>
    </div>
    </>
  )
}