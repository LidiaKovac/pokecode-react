import { Component } from "react";
import { Container, ListGroup } from "react-bootstrap";
import SinglePokemon from "../SinglePokemon/SinglePokemon";
class PokemonList extends Component {
    state = {
        pokemon: [],
        selected: "https://pokeapi.co/api/v2/pokemon/1/"
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.selected !== this.state.selected) {
            this.props.prendiUrl(this.state.selected)
        }
    }

    componentDidMount = async () => {
        let res = await fetch("https://pokeapi.co/api/v2/pokemon")
        /* 
            {
                total: 1234,
                results: [pokemon qui],
                next: url per paginazione
            }
        */
        let { results: pkmn } = await res.json() //destrutturazione dell'oggetto => prendiamo results e lo rinominiamo in pkmn
        //pkmn => array di pokemon
        this.setState({ pokemon: pkmn }) //salva l'array nello state 
    }

    render() {
        return (
            <Container >
                <ListGroup> {/* <<<< UL */}
                    {this.state.pokemon.map((singlePkmn, i) => {
                        return <SinglePokemon key={`pkmn_${i}`} pokeData={singlePkmn} prendiDalFiglio={(dataDalFiglio /* ☺ */)=> this.setState({selected: dataDalFiglio})} />
                        // pokedata => {name: "pippo", url: "pippo.com"}
                    })}

                </ListGroup>
            </Container>)
    }
}

export default PokemonList