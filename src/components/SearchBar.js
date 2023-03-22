import React from "react";
import { useState } from "react";
import movies from "../assets/db.json";

function SearchBar() {
  //useState
  const [search, setSearch] = useState("");

  //Mettre à jour la valeur entrée
  const onChange = (e) => {
    setSearch(e.target.value);
  };
  const filterTitle = movies.filter((p) => {
    return p.title.toLocaleLowerCase().includes(search.toLocaleLowerCase());
  });

  return (
    <div className="SearchBar-container">
      <input
        className="SearchBar"
        type="text"
        value={search}
        onChange={onChange}
      ></input>
      ;
    </div>
  );
}

export default SearchBar;
