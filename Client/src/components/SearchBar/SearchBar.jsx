import { useState } from "react";
import style from "./SearchBar.module.css";
import Button from "../UI/Button";

export default function SearchBar(props) {
  const { onSearch } = props;

  const [input, setInput] = useState([]);

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const searcChar = (input) => {
    onSearch(input);
    setInput("");
  };

  return (
    <div className={style.search_bar}>
      <input
        type="text"
        name="search-character"
        value={input}
        onChange={onChange}
      />
      <Button className={style.button} onClick={() => searcChar(input)}>
        Agregar
      </Button>
    </div>
  );
}
