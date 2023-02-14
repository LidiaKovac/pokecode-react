import { Component } from "react";
import { Card, Button } from "react-bootstrap"
class PokemonDetails extends Component {
    state = {
        single: {}
    }
    fetchSinglePokemon = async () => {
        try {
            let res = await fetch(this.props.pokemonSelezionato)
            let pkmn = await res.json()
            this.setState({ single: pkmn })
        } catch (error) {
            console.log(error);
        }
    }
    componentDidMount() {
        this.fetchSinglePokemon()
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.pokemonSelezionato !== this.props.pokemonSelezionato) {
            this.fetchSinglePokemon()
        }
    }






















    render() {
        return (<Card>
            <Card.Img variant="top" src={this.state.single.sprites?.other["official-artwork"].front_default} />
            <Card.Body>
                <Card.Title>{this.state.single?.name}</Card.Title>
                <Card.Text>

                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>)
    }
}

export default PokemonDetails