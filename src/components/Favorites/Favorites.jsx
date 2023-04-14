import { connect, useDispatch } from "react-redux";
import Card from "../Card/Card";
import style from "./Favorites.module.css";
import { orderCards, filterCards } from "../../redux/actions";

export function Favorite(props) {
  const { myFavorites } = props;
  const dispatch = useDispatch();

  function order(e) {
    const value = e.target.value;
    dispatch(orderCards(value));
  }

  function byGender(e) {
    const value = e.target.value;
    dispatch(filterCards(value));
  }

  {
    console.log(myFavorites);
  }
  return (
    <div>
      <div className={style.filter}>
        <select name="name" id="" onChange={order}>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select name="name" id="" onChange={byGender}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div className={style.cards}>
        {myFavorites.map((char) => (
          <Card
            key={char.id}
            id={char.id}
            name={char.name}
            image={char.image}
            gender={char.gender}
            species={char.species}
          />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorite);
