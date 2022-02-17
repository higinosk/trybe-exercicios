import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWord';
import Header from './Header';
//dividir tudo em componentes
//Pai de todos o 1 componente chamado 

function App() {
  //só é possivel retornar 1 elemento.
  return (
    <div className="App">
      <Header />
      <HelloWorld />
    </div>
  );
}

export default App;
