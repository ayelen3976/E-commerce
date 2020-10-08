import React from 'react';
import SearchBar from './SearchBar.jsx';
import style from './css/Nav.module.css';
import { Link } from 'react-router-dom';

function Nav({onSearch, onChange}) {
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