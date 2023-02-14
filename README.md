# Pokecode

## Piano di battaglia:

- SASS importato da un progetto vecchio, non ci soffermiamo più di tanto

- Componenti:

  - SinglePokemon
    - state: no
    - props:
      - prendiDalFiglio => funzione che setta l'url nello state di PokemonList
      - pokeData => oggetto con nome del pokemon e URL
        ```js
            {name: "pippo", url: "https://nomi.com/api/pippo"}
        ```
    - metodi: 
        - portaAGenitore => funzione che chiama prendiDalFiglio
  - PokemonList
    - state: 
        - pokemon => array dalla fetch, inizialmente vuoto
        - selected => url del pokemon selezionato, inizialmente per il primo pokemon del database
    - props: 
        - prendiUrl => funzione che setta l'url nello state di App.js
    - metodi: 
        - componentDidMount => fetch
        - componentDidUpdate => chiama la prop prendiUrl con l'url selezionata come paramentro
  - PokemonDetails

- Struttura
  - App.js
    - PokemonList
      - SinglePokemon
    - PokemonDetails
