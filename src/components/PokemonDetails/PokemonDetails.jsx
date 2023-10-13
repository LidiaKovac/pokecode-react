import { Component } from "react"
import { Card, Button } from "react-bootstrap"
import { MdCatchingPokemon } from "react-icons/md"

import "./PokemonDetails.scss"
class PokemonDetails extends Component {
  render() {
    return (
      <Card>
        <Card.Img
          variant="top"
          src={
            this.props.selected.sprites?.other["official-artwork"]
              .front_default
          }
        />
        <Card.Body>
          <Card.Title>{this.props.selected?.name}</Card.Title>
          <Card.Header className="abilities">
            <ul>
              {this.props.selected.abilities?.map((ab, i) => {
                return (
                  <li className="single-ab" key={`ab_${i}`}>
                    <MdCatchingPokemon /> {ab.ability.name}
                  </li>
                )
              })}
            </ul>
            Presente in
            <strong>
              {" "}
              {this.props.selected.game_indices?.length}{" "}
            </strong>{" "}
            versioni del gioco
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
