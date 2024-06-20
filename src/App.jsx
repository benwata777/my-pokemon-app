// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
// import React, { useState } from "react";
// import axios from "axios";
// import SearchBar from "./components/SearchBar";
// import PokemonInfo from "./components/PokemonInfo";

// const App = () => {
//   const [pokemon, setPokemon] = useState(null);

//   const fetchPokemonData = async (name) => {
//     try {
//       const response = await axios.get(
//         `https://pokeapi.co/api/v2/pokemon/${name}`
//       );
//       setPokemon(response.data);
//     } catch (error) {
//       console.error("Error fetching Pokémon data:", error);
//       setPokemon(null);
//     }
//   };

//   return (
//     <div>
//       <h1>Pokémon Search</h1>
//       <SearchBar onSearch={fetchPokemonData} />
//       <PokemonInfo pokemon={pokemon} />
//     </div>
//   );
// };

// export default App;
//v2
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import SearchBar from "./components/SearchBar";
// import PokemonInfo from "./components/PokemonInfo";

// const App = () => {
//   const [pokemon, setPokemon] = useState(null);
//   const [allPokemon, setAllPokemon] = useState([]);

//   useEffect(() => {
//     const fetchAllPokemon = async () => {
//       try {
//         const response = await axios.get(
//           "https://pokeapi.co/api/v2/pokemon?limit=1000"
//         );
//         setAllPokemon(response.data.results);
//       } catch (error) {
//         console.error("Error fetching all Pokémon data:", error);
//       }
//     };

//     fetchAllPokemon();
//   }, []);

//   const fetchPokemonData = async (name) => {
//     try {
//       const matchedPokemon = allPokemon.find((p) =>
//         p.name.includes(name.toLowerCase())
//       );
//       if (matchedPokemon) {
//         const response = await axios.get(matchedPokemon.url);
//         setPokemon(response.data);
//       } else {
//         setPokemon(null);
//       }
//     } catch (error) {
//       console.error("Error fetching Pokémon data:", error);
//       setPokemon(null);
//     }
//   };

//   return (
//     <div>
//       <h1>Pokémon Search</h1>
//       <SearchBar onSearch={fetchPokemonData} />
//       <PokemonInfo pokemon={pokemon} />
//     </div>
//   );
// };

// export default App;
//v3
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import SearchBar from "./components/SearchBar";
// import PokemonInfo from "./components/PokemonInfo";
// import "./App.css";

// const App = () => {
//   const [pokemon, setPokemon] = useState(null);
//   const [allPokemon, setAllPokemon] = useState([]);

//   useEffect(() => {
//     const fetchAllPokemon = async () => {
//       try {
//         const response = await axios.get(
//           "https://pokeapi.co/api/v2/pokemon?limit=1000"
//         );
//         setAllPokemon(response.data.results);
//       } catch (error) {
//         console.error("Error fetching all Pokémon data:", error);
//       }
//     };

//     fetchAllPokemon();
//   }, []);

//   const fetchPokemonData = async (name) => {
//     try {
//       const matchedPokemon = allPokemon.find((p) =>
//         p.name.includes(name.toLowerCase())
//       );
//       if (matchedPokemon) {
//         const response = await axios.get(
//           `https://pokeapi.co/api/v2/pokemon/${matchedPokemon.name}`
//         );
//         setPokemon(response.data);
//       } else {
//         setPokemon(null);
//       }
//     } catch (error) {
//       console.error("Error fetching Pokémon data:", error);
//       setPokemon(null);
//     }
//   };

//   return (
//     <div className="container">
//       <h1>Pokémon Search</h1>
//       <SearchBar onSearch={fetchPokemonData} />
//       <PokemonInfo pokemon={pokemon} />
//     </div>
//   );
// };

// export default App;
//v4
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import SearchBar from "./components/SearchBar";
// import PokemonInfo from "./components/PokemonInfo";
// import "./App.css";

// const App = () => {
//   const [pokemon, setPokemon] = useState(null);
//   const [allPokemon, setAllPokemon] = useState([]);

//   useEffect(() => {
//     const fetchAllPokemon = async () => {
//       try {
//         const response = await axios.get(
//           "https://pokeapi.co/api/v2/pokemon?limit=1000"
//         );
//         setAllPokemon(response.data.results);
//       } catch (error) {
//         console.error("Error fetching all Pokémon data:", error);
//       }
//     };

//     fetchAllPokemon();
//   }, []);

//   const fetchPokemonData = async (name) => {
//     try {
//       const matchedPokemon = allPokemon.find((p) =>
//         p.name.includes(name.toLowerCase())
//       );
//       if (matchedPokemon) {
//         const response = await axios.get(
//           `https://pokeapi.co/api/v2/pokemon/${matchedPokemon.name}`
//         );
//         setPokemon(response.data);
//       } else {
//         setPokemon(null);
//       }
//     } catch (error) {
//       console.error("Error fetching Pokémon data:", error);
//       setPokemon(null);
//     }
//   };

//   return (
//     <div className="container">
//       <h1>Pokémon Search</h1>
//       <SearchBar onSearch={fetchPokemonData} />
//       <PokemonInfo pokemon={pokemon} />
//     </div>
//   );
// };

// export default App;
//v5
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import SearchBar from "./components/SearchBar";
// import PokemonInfo from "./components/PokemonInfo";
// import "./App.css";

// const App = () => {
//   const [pokemon, setPokemon] = useState(null);
//   const [allPokemon, setAllPokemon] = useState([]);

//   useEffect(() => {
//     const fetchAllPokemon = async () => {
//       try {
//         const response = await axios.get(
//           "https://pokeapi.co/api/v2/pokemon?limit=1000"
//         );
//         setAllPokemon(response.data.results);
//       } catch (error) {
//         console.error("Error fetching all Pokémon data:", error);
//       }
//     };

//     fetchAllPokemon();
//   }, []);

//   const fetchPokemonData = async (name) => {
//     try {
//       const matchedPokemon = allPokemon.find((p) =>
//         p.name.includes(name.toLowerCase())
//       );
//       if (matchedPokemon) {
//         const response = await axios.get(
//           `https://pokeapi.co/api/v2/pokemon/${matchedPokemon.name}`
//         );
//         setPokemon(response.data);
//       } else {
//         setPokemon(null);
//       }
//     } catch (error) {
//       console.error("Error fetching Pokémon data:", error);
//       setPokemon(null);
//     }
//   };

//   return (
//     <div className="container">
//       <h1>Pokémon Search</h1>
//       <SearchBar onSearch={fetchPokemonData} />
//       <PokemonInfo pokemon={pokemon} />
//       <footer>made by Benwata777</footer>
//     </div>
//   );
// };

// export default App;
//v6
import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import PokemonInfo from "./components/PokemonInfo";
import "./App.css";

const App = () => {
  const [pokemon, setPokemon] = useState(null);
  const [allPokemon, setAllPokemon] = useState([]);

  useEffect(() => {
    const fetchAllPokemon = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=1000"
        );
        const pokemonData = response.data.results.map((pokemon, index) => ({
          ...pokemon,
          id: index + 1,
        }));
        setAllPokemon(pokemonData);
      } catch (error) {
        console.error("Error fetching all Pokémon data:", error);
      }
    };

    fetchAllPokemon();
  }, []);

  const fetchPokemonData = async (input) => {
    try {
      let matchedPokemon;
      if (!isNaN(input)) {
        matchedPokemon = allPokemon.find((p) => p.id === parseInt(input));
      } else {
        matchedPokemon = allPokemon.find((p) =>
          p.name.includes(input.toLowerCase())
        );
      }

      if (matchedPokemon) {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${matchedPokemon.name}`
        );
        setPokemon(response.data);
      } else {
        setPokemon(null);
      }
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
      setPokemon(null);
    }
  };

  return (
    <div className="container">
      <h1>Pokémon Search</h1>
      <SearchBar suggestions={allPokemon} onSearch={fetchPokemonData} />
      <PokemonInfo pokemon={pokemon} />
      <footer>made by Benwata777</footer>
    </div>
  );
};

export default App;
