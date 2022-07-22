import React from "react";
import './Topo.css'


export default function Footer(){
    return (
        <footer>
                <p>0/4 concluídos</p>
                <div>
                <ion-icon className='icone erro'name="close-circle-outline"></ion-icon>
                <ion-icon className='icone acerto' name="checkmark-circle-outline"></ion-icon> 
                <ion-icon className='icone pergunta' name="help-circle-outline"></ion-icon>
                </div>
              
        </footer>
    )
}