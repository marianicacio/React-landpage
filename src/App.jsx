import Brand from "./compoents/brand";
import Header from "./compoents/header"
import Main from "./compoents/main"
import Square from "./compoents/square";
import Hero from "./compoents/hero";
import Card from "./compoents/card";
import Box from "./assets/imgs/box.svg"
import "./App.css";



export default function App() {
  return (
    <>
    <Header/>
    <Main/>
    <Card src={Box} alt={"imagem de uma caixa"} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla." title="Highlight benefit one" />
    <div className="app-container">
      <Hero aligment="right"/>
      <Hero />
      <Hero aligment="right"/>
    </div>
    </>
  )
}