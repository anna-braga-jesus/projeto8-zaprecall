import React from 'react';
import './Topo.css' 
import logo2 from './logo-pequeno.png'



function leiaMais(){
    let pontos = document.getElementById("pontos");
    let maisTexto = document.getElementById("mais");
    let btnLeiaMais = document.getElementById("btnLeiaMais");

    if(pontos.style.display==="none"){
        pontos.style.display="inline";
        maisTexto.style.display="none";
    }else{
        pontos.style.display="none";
        maisTexto.style.display="inline";
    }

}




export default function Topo(){
    return (
        <>
        
            <div className="retangulo">
                <img src={logo2} alt='socorro' />
                    <p className="titulo">Zap Recall</p>
            </div>
           
        
       
       
    </>
    )
  
}