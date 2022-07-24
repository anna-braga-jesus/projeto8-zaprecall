import React from "react";
import './Topo.css'




export default function Footer({
    resultado,tamanho,show,setShow,texto,setTexto
}){
    

    // console.log(resultado.length)
    resultado.map(r => console.log(r))
    console.log(show)
    PegaContador();
    function PegaContador(){
        //Vamos precisar do resultado.length   

        if(resultado.length===tamanho){

          console.log('Terminou');

          if(resultado.includes(1) ){
            setShow('😥 Putz...')
            setTexto('Ainda faltam alguns...Mas não desanime!')
          }else{
            setShow('🥳 Parabéns!')
            setTexto('Você não esqueceu de nenhum flashcard!')
            console.log(<br />)
          }
        }
       }
    console.log(resultado)
       

    return (
        <footer>
              <div className="resultado">
                    <h1>{show}</h1>
                    <span>{texto}</span>
                </div>
                <p>{resultado.length}/{tamanho} concluídos</p>
                <div>
                    {resultado.map(resultado => 
                     resultado===1 ?
                                    <ion-icon className='icone-erro' name="close-circle-outline"></ion-icon>
                                :
                    resultado===2 ?
                                    <ion-icon className='icone-pergunta' name="help-circle-outline"></ion-icon>
                    :
                                    <ion-icon className='icone-acerto' name="checkmark-circle-outline"></ion-icon> 
                    ) }
                </div>
              
              
        </footer>
    )
}