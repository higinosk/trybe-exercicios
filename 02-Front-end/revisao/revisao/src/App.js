
import './App.css';
import MeuComponent from './Components/MeuComponent';

function Filho(props) {
  return <p>{props.nome}</p>
}


function App() {
  let nome = 'John';

  return (
    <div className="App">
      <input value={nome} name='nome' 
      onChange={(event) => {
        nome=event.target.value}}
        />
        <MeuComponent>
          Conteúdo interno do Componente
          </MeuComponent>
    </div>
  );
}

export default App;
