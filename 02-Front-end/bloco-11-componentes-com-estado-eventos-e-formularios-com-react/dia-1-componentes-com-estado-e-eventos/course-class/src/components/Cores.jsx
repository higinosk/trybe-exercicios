import React from "react";
import colors from "../colors";
import './Cores.css'

class Cores extends React.Component {

    //state = { filtro: 'XXX'} NORMAL EM 2 MESES!!

    constructor(props) {
        super(props)
        this.state = { filtro: 'xxx'}

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        console.log(event.target.value);
        this.setState({
            filtro: event.target.value
        })
    }

    render() {
        return (
            <div>
                <div>
                    <h2>Minhas Cores</h2>
                    <h3>Meu filtro é: {this.state.filtro}</h3>
                    <input type="text" value= {this.state.filtro}
                     onChange={ this.handleChange } />
                </div>
                <hr />
                <div>
                    <ul>
                        {colors
                        .filter ( (color) => this.state.filtro === '' || color.name.includes(this.state.filtro) )
                        .map ( (color, index) => (<li key={ index }>{ color.name }</li>))}
                    </ul>

                </div>
            </div>
        )
    }
}

export default Cores;