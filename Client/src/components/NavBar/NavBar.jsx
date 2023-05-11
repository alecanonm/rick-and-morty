import styles from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link, NavLink } from "react-router-dom";
import logoRick from "../Images/kisspng-rick-sanchez-morty-smith-lawnmower-dog-scientist-n-5af4f92bc144b5.4062790715260040117916.png";
import Button from "../UI/Button";

export default function NavBar({ onSearch, logOut }) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img className={styles.rick} src={logoRick} alt="Pic of rick" />
        <h1 className={styles["logo-h1"]}>Rick and Morty</h1>
      </div>

      <SearchBar onSearch={onSearch} />

      <div className={styles.main_list}>
        <ul className={styles.navlinks}>
          <NavLink className={styles.navlinks}>
            <Link to="/about">
              <li>
                {" "}
                <Button>About</Button>
              </li>
            </Link>
            <Link to="/favorites">
              <li>
                <Button>Favorites</Button>
              </li>
            </Link>
            <Link to="/home">
              <li>
                <Button>Home</Button>
              </li>
            </Link>
          </NavLink>
          <Button className={styles.buton} onClick={logOut}>
            Log out
          </Button>
        </ul>
      </div>
    </nav>
  );
}
