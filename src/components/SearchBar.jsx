import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import "./SearchBar.css";

const SearchBar = ({ suggestions, onSearch }) => {
  const [value, setValue] = useState("");

  const handleSearch = () => {
    if (value) {
      onSearch(value);
    }
  };

  return (
    <div className="search-bar">
      <Autocomplete
        freeSolo
        options={suggestions.map((option) => option.name)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Enter Pokémon name or number"
            variant="outlined"
            onChange={(e) => setValue(e.target.value)}
          />
        )}
        onInputChange={(event, newInputValue) => {
          setValue(newInputValue);
        }}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
