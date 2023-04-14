import { useState } from "react";
import styles from "./Landing.module.css";
import emailValidation, { passwordValidation } from "./Validation";

export default function Landing(props) {
  const { login } = props;
  const [userData, setUserData] = useState({ username: "", password: "" });
  const [erros, setErrors] = useState({ username: "", password: "" });
  const handleInputChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [property]: value });
    property === "username" &&
      emailValidation({ ...userData, [property]: value }, erros, setErrors);

    property === "password" &&
      passwordValidation({ ...userData, [property]: value }, erros, setErrors);
  };

  const handleSubmit = (userData) => {
    login(userData);
  };

  return (
    <>
      <div className={styles.welcome}>
        <h1>Welcome to Rick and Morty API</h1>
      </div>
      <div className={styles.loginBox}>
        <h2>Login</h2>
        <form action="">
          <div className={styles.userBox}>
            <input
              type="text"
              name="username"
              value={userData.username}
              onChange={handleInputChange}
            />
            <label htmlFor="username">Username</label>
          </div>
          <div className={styles.userBox}>
            <input
              type="text"
              name="password"
              value={userData.password}
              onChange={handleInputChange}
            />
            <label htmlFor="password">Password</label>
          </div>

          <button onClick={() => handleSubmit(userData)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </button>
          <div>
            <ul className={styles.error}>
              <li>{erros.username}</li>
              <li>{erros.password}</li>
            </ul>
          </div>
        </form>
      </div>
    </>
  );
}
