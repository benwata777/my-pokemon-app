// import React, { useState } from "react";

// const SearchBar = ({ onSearch }) => {
//   const [query, setQuery] = useState("");

//   const handleSearch = () => {
//     onSearch(query);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         placeholder="Enter Pokémon name"
//       />
//       <button onClick={handleSearch}>Search</button>
//     </div>
//   );
// };

// export default SearchBar;
//v2
// import React, { useState } from "react";

// const SearchBar = ({ onSearch }) => {
//   const [query, setQuery] = useState("");

//   const handleSearch = () => {
//     onSearch(query);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         placeholder="Enter Pokémon name"
//       />
//       <button onClick={handleSearch}>Search</button>
//     </div>
//   );
// };

// export default SearchBar;
//v3
// import React, { useState } from "react";
// import "./SearchBar.css";

// const SearchBar = ({ onSearch }) => {
//   const [query, setQuery] = useState("");

//   const handleSearch = () => {
//     onSearch(query);
//   };

//   return (
//     <div className="search-bar">
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         placeholder="Enter Pokémon name"
//       />
//       <button onClick={handleSearch}>Search</button>
//     </div>
//   );
// };

// export default SearchBar;
//v4
// import React, { useState } from "react";
// import "./SearchBar.css";

// const SearchBar = ({ onSearch }) => {
//   const [query, setQuery] = useState("");

//   const handleSearch = () => {
//     onSearch(query);
//   };

//   return (
//     <div className="search-bar">
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         placeholder="Enter Pokémon name"
//       />
//       <button onClick={handleSearch}>Search</button>
//     </div>
//   );
// };

// export default SearchBar;
//v5
import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import "./SearchBar.css";

const SearchBar = ({ suggestions, onSearch }) => {
  const [value, setValue] = useState("");

  const handleSearch = () => {
    onSearch(value);
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
