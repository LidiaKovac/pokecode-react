import { Component, useState } from "react"
import { Container, Row } from "react-bootstrap"
import { Paginazione } from "../Paginazione/Paginazione"
import SinglePokemon from "../SinglePokemon/SinglePokemon"
export const PokemonList = (props) => {
  return (
    <Container>
      <Row>
        {" "}
        {/* <<<< UL */}
        {props.pokemon.map((singlePkmn, i) => {
          return (
            <SinglePokemon
              key={`pkmn_${i}`}
              pkmn={singlePkmn}
              selected={props.selected?.name === singlePkmn.name}
              prendiDalFiglio={props.setPokemon}
            />
          )
        })}
      </Row>
    </Container>
  )
}

export default PokemonList
