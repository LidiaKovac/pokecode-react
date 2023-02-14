import { Component } from "react"
import { Container, ListGroup, InputGroup, Form } from "react-bootstrap"
import { Paginazione } from "../Paginazione/Paginazione"
import SinglePokemon from "../SinglePokemon/SinglePokemon"
class PokemonList extends Component {
  state = {
    pokemon: [],
    selected: "https://pokeapi.co/api/v2/pokemon/1/",
    next: "",
    previous: "",
  }
  fetchByUrl = async (url) => {
    try {
      let res = await fetch(url)
      /* 
            {
                total: 1234,
                results: [pokemon qui],
                next: url per paginazione
            }
        */
      let { results: pkmn, next, previous } = await res.json() //destrutturazione dell'oggetto => prendiamo results e lo rinominiamo in pkmn
      //pkmn => array di pokemon
      this.setState({ pokemon: pkmn, next: next, previous: previous }) //salva l'array nello state
    } catch (error) {}
  }
  componentDidUpdate(previousProps, previousState) {
    if (previousState.selected !== this.state.selected) {
      this.props.prendiUrl(this.state.selected)
    }
  }

  componentDidMount = () => {
    this.fetchByUrl("https://pokeapi.co/api/v2/pokemon")
  }

  render() {
    return (
      <Container>
       
        <div className="d-flex justify-content-center">
          <Paginazione
            changePage={this.fetchByUrl}
            previous={this.state.previous}
            next={this.state.next}
          />
        </div>
        <ListGroup>
          {" "}
          {/* <<<< UL */}
          {this.state.pokemon.map((singlePkmn, i) => {
            return (
              <SinglePokemon
                key={`pkmn_${i}`}
                pokeData={singlePkmn}
                selected={this.state.selected === singlePkmn.url} //passiamo una CONDIZIONE => dentro singlePokemon ci troveremo VERO o FALSO
                prendiDalFiglio={(dataDalFiglio /* ☺ */) =>
                  this.setState({ selected: dataDalFiglio })
                }
              />
            )
            // pokedata => {name: "pippo", url: "pippo.com"}
          })}
        </ListGroup>
      </Container>
    )
  }
}

export default PokemonList
