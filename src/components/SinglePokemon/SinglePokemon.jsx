import { Component } from "react";
import { ListGroup } from "react-bootstrap"

class SinglePokemon extends Component {
    portaAGenitore(urlDelPokemon) {
        console.log(urlDelPokemon)
        this.props.prendiDalFiglio(urlDelPokemon /* ☺ */)  
        
    }
    render() {
        return (
            <ListGroup.Item onClick={()=> {
                this.portaAGenitore(this.props.pokeData.url)
            }}> {/* <<<< LI */}
                {this.props.pokeData.name}
            </ListGroup.Item>
        )
    }
}

export default SinglePokemon