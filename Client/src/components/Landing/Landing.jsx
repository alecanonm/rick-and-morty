import { useState } from "react";
import styles from "./Landing.module.css";
import emailValidation, { passwordValidation } from "./Validation";
import Button from "../UI/Button";
export default function Landing(props) {
  const { login } = props;
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [erros, setErrors] = useState({ email: "", password: "" });
  const handleInputChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [property]: value });
    property === "email" &&
      emailValidation({ ...userData, [property]: value }, erros, setErrors);

    property === "password" &&
      passwordValidation({ ...userData, [property]: value }, erros, setErrors);
  };

  // const handleSubmit = (userData) => {
  //   login(userData);
  // };
  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <>
      <div className={styles.welcome}></div>
      <div className={styles.loginBox}>
        <h2>Login</h2>
        <form>
          <div className={styles.userBox}>
            <input
              type="text"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
            />
            <p className={styles.error}>{erros.email}</p>
            <label htmlFor="email">Email:</label>
          </div>
          <div className={styles.userBox}>
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleInputChange}
            />
            <label htmlFor="password">Password:</label>
          </div>
          <p className={styles.error}>{erros.password}</p>
          <Button onClick={handleSubmit} className={styles.buton}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </Button>
          {/* <div>
            <ul className={styles.error}></ul>
          </div> */}
        </form>
      </div>
    </>
  );
}
