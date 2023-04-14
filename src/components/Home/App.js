import "./App.css";
import Cards from "../Cards/Cards";
import Landing from "../Landing/Landing";
import About from "../About/About";
import CardDetail from "../CardDetail/Detail";
import NavBar from "../NavBar/NavBar";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Favorite from "../Favorites/Favorites";
import { deleteCharacter } from "../../redux/actions";
import { connect } from "react-redux";

//----------------App-------------------------
export function App(props) {
  const { pathname } = useLocation();
  const { deleteCharacter } = props;

  const navigate = useNavigate();
  const [access, setAccess] = useState(true);
  const username = "henry@gmail.com";
  const password = "12345678";

  useEffect(() => {
    access && navigate("/");
  }, [access]);

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(false);
      navigate("/home");
    }
  }

  const logOut = () => {
    setAccess(true);
  };

  const [characters, setCharacters] = useState([]);
  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((res) => res.json())
      .then((response) => {
        const aux = characters.some(
          (character) => character.id === response.id
        );
        aux
          ? alert("El personaje ya esta en pantalla")
          : response.id
          ? setCharacters((oldCharacters) => [...oldCharacters, response])
          : window.alert("No hay personajes con ese ID");
      });
  };

  const onClose = (id) => {
    setCharacters(
      characters.filter((character) => character.id !== Number(id))
    );
    deleteCharacter(id);
  };

  return (
    <div>
      {console.log(pathname)}
      {pathname !== "/" && <NavBar onSearch={onSearch} logOut={logOut} />}
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/" element={<Landing login={login} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<CardDetail />} />
        <Route path="/favorites" element={<Favorite />}></Route>
      </Routes>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCharacter(id) {
      dispatch(deleteCharacter(id));
    },
  };
};

export default connect(null, mapDispatchToProps)(App);
