import { Component, useEffect, useState } from "react"
import { Col, Container, Row, Spinner } from "react-bootstrap"
import PokeNavbar from "../../components/Navbar/PokeNavbar"
import PokemonDetails from "../../components/PokemonDetails/PokemonDetails"
import PokemonList from "../../components/PokemonList/PokemonList"
import "../../style/index.scss"
import { Paginazione } from "../../components/Paginazione/Paginazione"

export const Home = (props) => {
  const [selected, setSelected] = useState({})
  const [pkmns, setPkmns] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  const fetchByPage = async (page) => {
    try {
      setLoading(true)
      const limit = page * 20
      const offset = limit - 20

      let res = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`
      )
      let { results: pkmn } = await res.json() //destrutturazione dell'oggetto => prendiamo results e lo rinominiamo in pkmn
      const all = []
      for (const small of pkmn) {
        let resBig = await fetch(small.url)
        let complete = await resBig.json()
        all.push(complete)
      }
      setPkmns(all)
      //pkmn => array di pokemon
      //   this.setState({ pokemon: pkmn, next: next, previous: previous }) //salva l'array nello state
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchByPage(page)
  }, [page])
  return (
    <>
      <PokeNavbar />
        <Container className="mt-5">
          <div className="d-flex justify-content-center">
            <Paginazione changePage={setPage} />
          </div>
      {loading ? (
        <Spinner animation="grow" variant="danger" />
      ) : (
          <Row>
            <Col lg={selected.name ? 8 : 12}>
              <PokemonList
                selected={selected}
                pokemon={pkmns}
                setPokemon={setSelected}
              />
            </Col>
            {selected.name && (
              <Col>
                <PokemonDetails selected={selected} />
              </Col>
            )}
          </Row>
      )}
        </Container>
    </>
  )
}
