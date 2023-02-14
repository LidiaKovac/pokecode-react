# Pokecode

## Piano di battaglia:

- SASS importato da un progetto vecchio, non ci soffermiamo più di tanto

- Componenti:

  - SinglePokemon
    - props:
      - prendiDalFiglio => funzione che setta l'url nello state di PokemonList
      - pokeData => oggetto con nome del pokemon e URL
        ```js
            {name: "pippo", url: "https://nomi.com/api/pippo"}
        ```
    - metodi: 
        - portaAGenitore => funzione che chiama prendiDalFiglio
  - PokemonList
    - componentDidMount => fetch
  - PokemonDetails

- Struttura
  - App.js
    - PokemonList
      - SinglePokemon
    - PokemonDetails
