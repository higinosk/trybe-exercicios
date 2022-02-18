import React, { Component } from "react";

class Serie extends Component {
    render(){
        const { name, genre, image, characters, nota } = this.props.serieData; //desestrutalizar
        return (
            <>
            <h1>{name}</h1>
            <p>{genre}</p>
            <img src={image} alt="" width="100" />
            <p>{characters}</p>
            <p>{nota}</p>
            </>
        )
    }
}

export default Serie; 