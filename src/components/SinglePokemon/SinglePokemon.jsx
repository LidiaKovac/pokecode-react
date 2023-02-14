import { Component } from "react";
import { ListGroup } from "react-bootstrap"

// const sum = (a,b) => {
//     return a+b
// }

// let valore1 = 2
// let valore2 = 56

// sum(valore1, valore2)

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