import './App.css'
import Cabecalho from './Componentes/Cabecalho'
import Banner from './Componentes/Banner'
import Livros from './Componentes/Livro'
import Galeria from './Componentes/Galeria'
import Rodape from './Componentes/Rodape'



function App() {

  return (
    <>
    <Cabecalho/>
    <Banner/>

      <Livros
      titulo={"Diario de um banana"}
      escritor={"Jeff Kinney"}
      ano={2017}
      sinopse={"Greg é um garoto comum de 11 anos que vai à escola e enfrenta os desafios da pré-adolescência como milhões de outros. O que o torna tão especial é a vontade de dividir essas experiências com todo mundo, para o caso de tornar-se rico e famoso quando crescer."}
      />

      <Galeria/>

      <Rodape/>
    </>
  )
}

export default App