import ReactDOM from 'react-dom'; //Veremos mais pra frente
import React from 'react';
import Pagina1 from './Componentes/Pagina1'
import Home from './Componentes/Home'



function App() {

    const [pagina, setPagina]= React.useState(true);

    return (
        <>
             {pagina ? ( <div className='classe-botao'> <Home /><button className='botao-iniciar' onClick={() => setPagina(!pagina)}>Iniciar Recall!!</button></div> ) : (<Pagina1 />)}

        </>
        
    );
}

ReactDOM.render(<App/>, document.querySelector(".root"));