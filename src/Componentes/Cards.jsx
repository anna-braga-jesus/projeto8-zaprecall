import React from "react";
import Card from "./Card";


export default function Cards({index,question,answer,setResultado,resultado}){
    
       return < Card index={index} question={question} answer={answer} setResultado={setResultado} resultado={resultado}/> 
}

