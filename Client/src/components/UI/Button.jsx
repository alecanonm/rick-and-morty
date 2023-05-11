import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`${styles.buton} ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
