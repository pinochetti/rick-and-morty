import "./App.css";
import Cards from "./components/Cards.jsx";
//import characters from './data.js' // characters es lo que me traigo por default y si yo quiero otros datos que estan siendo exportados, necesito traerlos con destructuring, y si necesito traerme dos objetos agrego dentro de las llaves una ","
import Nav from "./components/Nav";
import About from "./components/About";
import Detail from "./components/Detail";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  return (
    <div className="App" style={{ padding: "25px" }}>
      <Nav onSearch={onSearch} />
      <Routes>
        <Route
          path="home"
          element={<Cards onClose={onClose} characters={characters} />}
        />
        <Route path="about" element={<About />} />
        <Route path="detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
