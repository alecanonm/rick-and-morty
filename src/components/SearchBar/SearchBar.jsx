import { useState } from "react";
import style from "./SearchBar.module.css";

export default function SearchBar(props) {
  const { onSearch } = props;

  const [input, setInput] = useState([]);

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className={style.search_bar}>
      <input type="text" name="search-character" onChange={onChange} />
      <button onClick={() => onSearch(input)}>Agregar</button>
    </div>
  );
}
