import Card from "../Card/Card";
import style from "./Cards.module.css";
export default function Cards(props) {
  const { characters, onClose } = props;
  return (
    <div className={style.cards}>
      {characters.map((character) => (
        <Card
          key={character.id}
          id={character.id}
          name={character.name}
          image={character.image}
          species={character.species}
          gender={character.gender}
          status={character.status}
          origin={character.origin?.name}
          onClose={onClose}
        />
      ))}
    </div>
  );
}
