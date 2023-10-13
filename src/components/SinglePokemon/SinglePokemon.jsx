import { Component, useEffect, useState } from "react"
import { Card, Button, Col } from "react-bootstrap"
import { MdCatchingPokemon } from "react-icons/md"
import { HiOutlineSparkles } from "react-icons/hi"
import styles from "./SinglePokemon.module.scss"

export const SinglePokemon = (props) => {
  const [hovered, setIsHovered] = useState(false)
 
  const portaAGenitore = (urlDelPokemon) => {
    console.log(urlDelPokemon)
    props.prendiDalFiglio(urlDelPokemon /* ☺ */)
  }


  return (
    <Col
      xl={3}
      lg={4}
      md={6}
      sm={12}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="g-2"
      onClick={() => {
        portaAGenitore(props.pkmn)
      }}
    >
      <Card className={props.selected ? styles.selected : ""}>
        <Card.Img
          variant="top"
          src={
            // props.pkmn.sprites?.other["official-artwork"][
            //   hovered  ? "front_shiny" : "front_default"
            // ]
            props.pkmn.sprites?.other["official-artwork"]["front_default"]
          }
        />

        <Card.Body>
          <Card.Title> {props.pkmn.name}</Card.Title>
          {(props.selected || hovered) && (
            <span className={styles.sparkles}>
              <HiOutlineSparkles />
            </span>
          )}
        </Card.Body>
      </Card>
    </Col>
  )
}

export default SinglePokemon
