import vetor from '../Imagens/Vector.png'
import React from 'react';

export default function Card(props){

    const[clicado,setClicado]=React.useState(false);
    const[respostas,setRespostas]=React.useState(false);
    const[salvas,setSalvas]=React.useState(false);
    const[outra,setOutra]=React.useState(false);

    console.log( !clicado && !respostas && !salvas)
        return (
            !salvas && !respostas ?

        !clicado && !respostas ?
            <li className="caixa-pergunta">
           <span className='pergunta'>Pergunta {props.index}</span>
           <img onClick={ ()=> {setClicado(true)} } src={vetor}/>
            </li> :
            !respostas? <li className="caixa-pergunta2">
                 <span className='pergunta2'>{props.question}</span>
                 <img onClick={ ()=> {setRespostas(true)} } src={vetor}/>
            </li>
            :

            <li className="caixa-pergunta2">
                         <span className='pergunta'>{props.answer}</span>
                         <div className="caixa">
                         <button className="botao vermelho" onClick={ ()=> setSalvas(1)} >Não lembrei</button>
                         <button className="botao amarelo" onClick={ ()=> setSalvas(2)} >Quase não lembrei</button>
                         <button className="botao verde" onClick={ ()=> setSalvas(3)} >Zap!</button>
                         </div>
                       
                        {/* <img onClick={ ()=> {setCard('estado4')} } src={vetor}/> */}
                    </li>
            :
            <li className="caixa-pergunta4">
                   <span className='pergunta'> Pergunta {props.index}</span> 
                     { salvas===1 ?
                                 <>
                                      <span className='pergunta vermelho'> Pergunta {props.index}</span>
                                      <ion-icon className='icone-erro' name="close-circle-outline"></ion-icon>
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
                                      <ion-icon className='icone-acerto' name="checkmark-circle-outline"></ion-icon> 
                                 </>
                                      
                       }
                 </li>
) 
}