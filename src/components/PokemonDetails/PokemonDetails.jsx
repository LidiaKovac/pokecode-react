import { Component } from "react"
import { Card, Button } from "react-bootstrap"
import { MdCatchingPokemon } from "react-icons/md"

import "./PokemonDetails.scss"
class PokemonDetails extends Component {
  state = {
    single: {},
  }
  fetchSinglePokemon = async () => {
    try {
      let res = await fetch(this.props.pokemonSelezionato)
      let pkmn = await res.json()
      this.setState({ single: pkmn })
    } catch (error) {
      console.log(error)
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
    return (
      <Card>
        <Card.Img
          variant="top"
          src={
            this.state.single.sprites?.other["official-artwork"].front_default
          }
        />
        <Card.Body>
          <Card.Title>{this.state.single?.name}</Card.Title>
          <Card.Header className="abilities">
          
            <ul>
            {this.state.single.abilities?.map((ab,i) => {
              return (
                <li className="single-ab" key={`ab_${i}`}>
                  <MdCatchingPokemon /> {ab.ability.name}
                </li>
              )
            })}
            </ul>
            Presente in
            <strong> {this.state.single.game_indices?.length} </strong> versioni
            del gioco
          </Card.Header>
          <Button disabled variant="primary">
            La prossima puntata...
          </Button>
        </Card.Body>
      </Card>
    )
  }
}

export default PokemonDetails
