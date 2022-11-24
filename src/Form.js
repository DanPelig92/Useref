import { useRef } from "react";
import {useState } from "react";

export default function Form(){
    const [stato, modificaStato] = useState("");
    const nome = useRef("ciao");

    function stampanome(event) {
        event.preventDefault();
        modificaStato(nome.current.value);
        console.log(nome.current.value);
    }

    return (
        <div><form><label>Nome:</label>
        <input ref={nome} type="text"></input>
        <button onClick={stampanome}>SUBMITTA</button>
        <div>Il tuo nome è {stato}</div>
        </form></div>
    )
}