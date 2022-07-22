import React from "react";
import vetor from '../Imagens/Vector.png'
import Card from "./Card";


export default function Cards({index,question,answer}){
    
       return < Card index={index} question={question} answer={answer}/> 
}

