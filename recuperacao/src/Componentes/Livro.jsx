function Livros({titulo,escritor, ano, sinopse}){
    return(
     <section className="Livros">
        <div>
        <img src="banana.jpg"></img>
        </div>
        <div className="sobre">
            <h1>{titulo}</h1>
            <p>{escritor}</p>
            <p>{ano}</p>
            <p>{sinopse}</p>
        </div>
       
         </section>
    )
    }
    
    export default Livros;