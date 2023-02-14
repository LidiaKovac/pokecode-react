import { Component } from "react"
import { ListGroup, Row, Col } from "react-bootstrap"
import { MdCatchingPokemon } from "react-icons/md"
import "./SinglePokemon.scss"

class SinglePokemon extends Component {
  state = {
    selected: false,
  }
  portaAGenitore(urlDelPokemon) {
    console.log(urlDelPokemon)
    this.props.prendiDalFiglio(urlDelPokemon /* ☺ */)
  }
  render() {
    return (
      <ListGroup.Item
        className={this.props.selected ? "selected" : ""}
        onClick={() => {
          this.portaAGenitore(this.props.pokeData.url)
        }}
      >
        <Row className="justify-content-between">
          <Col>{this.props.pokeData.name}</Col>
          <Col xs={1}>{this.props.selected && <MdCatchingPokemon />}</Col>
        </Row>
      </ListGroup.Item>
    )
  }
}

export default SinglePokemon
