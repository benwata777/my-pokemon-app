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
import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter Pokémon name"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
