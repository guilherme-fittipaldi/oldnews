import React from "react";

import "./header.css";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <span>OldNews</span>
      </div>
      <div className="search">
        <TextField
          className="searchInput"
          placeholder="Pesquisar"
          InputProps={{
            disableUnderline: true,
            endAdornment: <SearchIcon className="searchIcon" />,
          }}
        />
      </div>
    </header>
  );
};

export default Header;
