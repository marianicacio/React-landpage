import Brand from "./compoents/brand";
import Header from "./compoents/header"
import Main from "./compoents/main"
import Square from "./compoents/square";
import Hero from "./compoents/hero";
import Card from "./compoents/card";
import Box from "./assets/imgs/box.svg"
import "./App.css";
import Count from "./class/hooks/useState/count";
import Accordion from "./class/hooks/useState/accordion";
import { useState } from "react";
import Example from "./class/hooks/useEffect/example";
import CountEffect from "./class/hooks/useHooks/countEffect";
import PokemonApi from "./class/hooks/useHooks/pokemonApi";



export default function App() {
      return (
        <PokemonApi/>
      )
}