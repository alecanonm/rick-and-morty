import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { addCharacter, deleteCharacter } from "../../redux/actions";
import { useState, useEffect } from "react";
import { connect } from "react-redux";

export function Card(props) {
  // const { character, onClose } = props;
  const { addCharacter, deleteCharacter, myFavorites } = props;
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    isFav ? deleteCharacter(props.id) : addCharacter(props);
    setIsFav(!isFav);
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={style.card}>
      <div className={style.boton}>
        {isFav ? null : (
          <button
            className={style.close_card}
            onClick={() => props.onClose(props.id)}
          >
            X
          </button>
        )}

        {isFav ? (
          <button className={style.fav} onClick={handleFavorite}>
            ❤️
          </button>
        ) : (
          <button className={style.fav} onClick={handleFavorite}>
            🤍
          </button>
        )}
        <h4 className={style.idCard}>{props.id}</h4>
      </div>

      <div className={style.name_character}>
        <h2>{props.name}</h2>
      </div>
      <Link to={`/detail/${props.id}`}>
        <img
          src={props.image}
          alt="imagene de un personaje de rick and morty"
        />
      </Link>
      <div className={style.footer}>
        <h2>{props.species}</h2>
        <h2>{props.gender}</h2>
      </div>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addCharacter(character) {
      dispatch(addCharacter(character));
    },

    deleteCharacter(id) {
      dispatch(deleteCharacter(id));
    },
  };
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
