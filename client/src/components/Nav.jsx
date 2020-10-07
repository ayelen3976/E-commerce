import React from 'react';
import SearchBar from './SearchBar.jsx';
import style from './css/Nav.module.css';

function Nav({onSearch}) {
  return (
    <nav className={style.navContent}>

        <h2>

          Diet Foods App

        </h2>

        <SearchBar onSearch={onSearch}/>

    </nav>
  );
};

export default Nav;