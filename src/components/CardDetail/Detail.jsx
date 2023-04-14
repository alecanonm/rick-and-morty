import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";

export default function CardDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`).then((res) =>
      res.json().then((response) => {
        if (response.name) {
          setCharacter(response);
        } else {
          alert("No hay personajes con ese id");
        }
      })
    );
    return setCharacter({});
  }, [id]);

  console.log(character);

  return (
    <div className={style.detail}>
      <div className={style.img}>
        <div className={style.imageRick}>
          <img src={character.image} alt="" />
        </div>
        <div className={style.characteristics}>
          <h1>{character.name}</h1>
          <h2>
            <span>Status:</span> {character.status}
          </h2>
          <h2>
            <span>Specie:</span> {character.species}
          </h2>
          <h2>
            <span>Gender:</span> {character.gender}
          </h2>
          <h2>
            <span>Origin:</span> {character.origin?.name}
          </h2>
        </div>
      </div>
    </div>
  );
}
