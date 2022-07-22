import React from "react";

let deck1 = [
    {question:"O que é JSX?", answer:"Uma extensão de linguagem do JavaScript"},
    {question:"O React é __ ", answer:"uma biblioteca JavaScript para construção de interfaces"},
    {question:"Componentes devem iniciar com __ ", answer:"letra maiúscula"},
    {question:"Podemos colocar __ dentro do JSX", answer:"expressões"},
    {question:"O ReactDOM nos ajuda __", answer:"interagindo com a DOM para colocar componentes React na mesma"},
    {question:"Usamos o npm para __", answer:"gerenciar os pacotes necessários e suas dependências"},
    {question:"Usamos props para __", answer:"passar diferentes informações para componentes"},
    {question:"Usamos estado (state) para __", answer:"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
];

export default function Flashcards(props){
    const n1 = 20;
    const n2 = 15;

    return(
        <section>
                <p>0/4: {props.concluidos}</p>
                <p>{'A soma de ' + n1 + ' com ' + n2 + ' é igual a ' + props.somar(n1,n2)} </p>
        </section>
    )

}