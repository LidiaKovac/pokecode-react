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
    - state: 
        single => oggetto che rappresenta un pokemon singolo: 
        ```jsonc
        {
    "abilities":[
       {
          "ability":{
             "name":"overgrow",
             "url":"https://pokeapi.co/api/v2/ability/65/"
          },
          "is_hidden":false,
          "slot":1
       },
       {
          "ability":{
             "name":"chlorophyll",
             "url":"https://pokeapi.co/api/v2/ability/34/"
          },
          "is_hidden":true,
          "slot":3
       }
    ],
    "base_experience":263,
    "forms":[
       {
          "name":"venusaur",
          "url":"https://pokeapi.co/api/v2/pokemon-form/3/"
       }
    ],
    "game_indices":[
       //tutte le versioni di gioco in cui e' presente il pokemon
    ],
    "height":20,
    "held_items":[
       
    ],
    "id":3,
    "is_default":true,
    "location_area_encounters":"https://pokeapi.co/api/v2/pokemon/3/encounters",
    "moves":[
        //tutte le mosse che il pokemon puo' imparare
    ],
    "name":"venusaur",
    "order":3,
    "past_types":[
       
    ],
    "species":{
       "name":"venusaur",
       "url":"https://pokeapi.co/api/v2/pokemon-species/3/"
    },
    "sprites":{
        //tutti gli sprites (immagini) del pokemon
    },
    "stats":[
        //le statistiche
    ],
    "types":[
       {
          "slot":1,
          "type":{
             "name":"grass",
             "url":"https://pokeapi.co/api/v2/type/12/"
          }
       },
       {
          "slot":2,
          "type":{
             "name":"poison",
             "url":"https://pokeapi.co/api/v2/type/4/"
          }
       }
    ],
    "weight":1000
 }
                
        ```
    - metodi: 
    - props: 

- Struttura
  - App.js
    - PokemonList
      - SinglePokemon
    - PokemonDetails
