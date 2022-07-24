import React, { useState } from 'react';
import Topo from './Topo';
import Cards from './Cards';
import Footer from './Footer';
import Flashcards from './Flashcards'


export default function Pagina1() {
const[resultado,setResultado]=useState([]);
const [show,setShow] =React.useState('');
const[texto, setTexto]=React.useState('');

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

//Tentativa de deixar randomico
deck1.sort( ()=>Math.random() - 0.5 );

let tamanhoDeck = deck1.length;

    return (
        <>
                    <Topo />
                    <ul className='container-perguntas'>
                        {deck1.map( (card,index) => {
                            return (<Cards key={index} index={index + 1} question={card.question} answer={card.answer} setResultado={setResultado} resultado={resultado}/>)
                        }  )}
                    </ul>
                 
                    <Footer resultado={resultado} tamanho={tamanhoDeck} show={show} setShow={setShow} texto={texto} setTexto={setTexto}/>
        </>
   
        
    );
}
