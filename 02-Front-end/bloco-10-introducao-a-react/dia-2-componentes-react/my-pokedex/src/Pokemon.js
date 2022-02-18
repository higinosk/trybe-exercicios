import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
    render() {
        const {pokemon: {name, type, averageWeight, image} } = this.props;
        return (
            <div className="pokemon">
                <div>
            <h1>{ name }</h1>
            <h2>{ type }</h2>
            <p>{`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
            </div>
            <img src={ image } alt={ `${name} sprite` } width="100" />
            </div>

        )
    }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemon;

// nome do pokemon;
// tipo do pokemon;
// peso médio do pokemon, acompanhado da unidade de medida usada;
// imagem do pokemon.