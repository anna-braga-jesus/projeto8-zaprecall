import vetor from '../Imagens/Vector.png'
import React from 'react';
import virar from '../Imagens/setinha.png'

export default function Card(props){

    const[clicado,setClicado]=React.useState(false);
    const[respostas,setRespostas]=React.useState(false);
    const[salvas,setSalvas]=React.useState(false);
//  const[outra,setOutra]=React.useState(false);

     function SalvaResposta(numero){
          setSalvas(numero);

          props.setResultado([...props.resultado,numero])
     }

    const FirstSteps = () => {
     if(salvas) {return null};

     if( !clicado && !respostas) {
          console.log('estado1')
          return (
               <li className="caixa-pergunta">
                    <span className='pergunta 666'>Pergunta {props.index}</span>
                    <img onClick={ ()=> {setClicado(true)} } src={vetor}/>
               </li> 
          )
     }

     if(!respostas) {
          console.log('estado2')
          return (
               <li className="caixa-pergunta2">
                    <span className='pergunta2'>{props.question}</span>
                    <img className='virar' onClick={ ()=> {setRespostas(true)} } src={virar}/>
               </li>
          )
     }
     console.log('estado3')
     return (
          <li className="caixa-pergunta2">
               <span className='pergunta 74'>{props.answer}</span>
               <div className="caixa">
               <button className="botao vermelho" onClick={ ()=> SalvaResposta(1)} >Não lembrei</button>
               <button className="botao amarelo" onClick={ ()=> SalvaResposta(2)} >Quase não lembrei</button>
               <button className="botao verde" onClick={ ()=> SalvaResposta(3)} >Zap!</button>
               </div>
               {/* <img onClick={ ()=> {setCard('estado4')} } src={vetor}/> */}
          </li>
     )
     
}
const LastStep = () => {
     if(!salvas) return null;
     return (
      <li className="caixa-pergunta4">
                 { salvas===1 ?
                             <>
                                  <span className='pergunta vermelho'> Pergunta {props.index}</span>
                                  <ion-icon className='erro' size="23px" name="close-circle-outline"></ion-icon>
                             </>
                             :
                  salvas===2 ?
                             <>
                                  <span className='pergunta amarelo'> Pergunta {props.index}</span>
                                  <ion-icon className='icone-pergunta' name="help-circle-outline"></ion-icon>
                             </>
                :

                             <>
                                  <span className='pergunta verde'> Pergunta {props.index}</span>
                                  <ion-icon className='icone acerto' name="checkmark-circle-outline"></ion-icon> 
                             </>

                   }
             </li>
     )
}
return (
     <>
          <FirstSteps /> 
          <LastStep />
     </>
    
       
)}