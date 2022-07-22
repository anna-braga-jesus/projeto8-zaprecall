import ReactDOM from 'react-dom'; //Veremos mais pra frente
import React,{useState, useEffect} from 'react';
import logo from './Imagens/logo.png'
import Pagina1 from './Componentes/Pagina1'
import Pagina2 from './Componentes/Pagina2'
import Footer from './Componentes/Footer';


function App() {

    const [pagina, setPagina]= useState(0);

    useEffect(
        ()=>{
            const url=window.location.href
            const res=url.split('?') //Virou um array
            setPagina(Number(res[1]))
            console.log(res)
        }
    )
  


    const LinksPaginas=(p)=>{
        if(p===1){
            window.open('http://localhost:' + window.location.port + "?1", '_self')
        }else if(p===2){
            window.open('http://localhost:' + window.location.port + "?2", '_self')
        }
    }

    const retornarPagina=()=>{
        if(pagina===1){
            return <Pagina1 />
        }else if(pagina===2){
            return <Pagina2 />
        }else{
            return <div className='site'>
                        <img src={logo} alt="logo principal"/>
                        <h1>Zap Recall</h1>
                        <button className="botao-iniciar" onClick={ ()=> LinksPaginas(1) }>Iniciar Recall!</button>


                        

                    </div> 
        }
    }

    return (
        <>
            {retornarPagina()}
        </>
        
    );
}

ReactDOM.render(<App/>, document.querySelector(".root"));

//Pretendo usar uma função tick no botão Reiniciar Recall, que é um bonus, ou useState