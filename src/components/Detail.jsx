import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char); //la informacion que me trae fetch se guarda en char
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <div>
      <h1>{character?.name}</h1>
      <p>{character?.species}</p>
      <p>{character?.gender}</p>
      <p>{character?.origin.name}</p>
      <p>{character?.status}</p>
      <img src={character?.image} alt={character.name} />
    </div>
  );
};

export default Detail;
