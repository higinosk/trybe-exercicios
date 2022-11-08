import React from "react";
import "./App.css";
import Cores from "./components/Cores";

class App extends React.Component {
 render() {
     return (
         <div className = "App">
             <h1>Minhas Cores!</h1>
             <Cores/>
         </div>
     )
 }
  
}
export default App;
