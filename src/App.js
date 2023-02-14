import { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PokeNavbar from './components/Navbar/PokeNavbar';
import PokemonDetails from './components/PokemonDetails/PokemonDetails';
import PokemonList from './components/PokemonList/PokemonList';
import './style/index.scss';

class App extends Component {
  state = {
    selected: "https://pokeapi.co/api/v2/pokemon/1/"
  }
  render() {

    return (
      <>
        <PokeNavbar />
        <Container className="mt-5">
          <Row>
            <Col lg={8}>
              <PokemonList prendiUrl={(url) => this.setState({selected: url})} />

            </Col>
            <Col>
              <PokemonDetails pokemonSelezionato={this.state.selected} />
            </Col>

          </Row>
        </Container>
      </>
    )
  }

}

export default App;
