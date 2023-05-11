import "./App.css";
import Cards from "../Cards/Cards";
import Landing from "../Landing/Landing";
import About from "../About/About";
import CardDetail from "../CardDetail/Detail";
import NavBar from "../NavBar/NavBar";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Favorite from "../Favorites/Favorites";
import { removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import axios from "axios";
//----------------App-------------------------
export function App(props) {
  const { pathname } = useLocation();
  const { removeFav } = props;

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  // const email = "henry@gmail.com";
  // const password = "12345678";

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  function login(userData) {
    const { email, password } = userData;
    console.log(userData);
    const URL = "http://localhost:3001/rickandmorty/login/";
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      const { access } = data;
      console.log(access);
      setAccess(access);
    });
    setAccess(true);
    !access && navigate("/home");

    // if (userData.password === password && userData.email === email) {
    //   setIsAccess(!false);
    //   navigate("/home");
    // }
  }

  const logOut = () => {
    setAccess(false);
  };

  const [characters, setCharacters] = useState([]);
  const onSearch = async (character) => {
    const response = await axios(
      `http://localhost:3001/rickandmorty/character/${character}`
    );
    try {
      console.log(response.data);
      const aux = characters.some(
        (character) => character.id === response.data.id
      );
      aux
        ? alert("El personaje ya esta en pantalla")
        : response.data.id
        ? setCharacters((oldCharacters) => [...oldCharacters, response.data])
        : window.alert("No hay personajes con ese ID");
    } catch (err) {
      console.log("something went wrong " + err);
    }
  };

  // .then((res) => res.json())
  //     .then((response) => {
  //       const aux = characters.some(
  //         (character) => character.id === response.id
  //       );
  //       aux
  //         ? alert("El personaje ya esta en pantalla")
  //         : response.id
  //         ? setCharacters((oldCharacters) => [...oldCharacters, response])
  //         : window.alert("No hay personajes con ese ID");
  //     })
  //     .catch((err) => console.log("something went wrong " + err));

  const onClose = (id) => {
    setCharacters(
      characters.filter((character) => character.id !== Number(id))
    );
    removeFav(id);
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
    removeFav(id) {
      dispatch(removeFav(id));
    },
  };
};

export default connect(null, mapDispatchToProps)(App);
