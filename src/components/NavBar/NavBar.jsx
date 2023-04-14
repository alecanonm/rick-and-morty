import styles from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link, NavLink } from "react-router-dom";
import logoRick from "../Images/kisspng-rick-sanchez-morty-smith-lawnmower-dog-scientist-n-5af4f92bc144b5.4062790715260040117916.png";

export default function NavBar({ onSearch, logOut }) {
  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src={logoRick} alt="Pic of rick" />
          <h1>Rick and Morty</h1>
        </div>
        <div className={styles.searchBar}>
          <SearchBar onSearch={onSearch} />
        </div>
        <div className={styles.main_list}>
          <ul className={styles.navlinks}>
            <NavLink className={styles.navlinks}>
              <Link to="/about">
                <li>About</li>
              </Link>
              <Link to="/favorites">
                <li>Favorites</li>
              </Link>
              <Link to="/home">
                <li>Home</li>
              </Link>
              <li onClick={logOut}>Log out</li>
            </NavLink>
          </ul>
        </div>
      </nav>
    </div>
  );
}
