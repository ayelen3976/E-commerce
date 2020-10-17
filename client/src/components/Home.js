import React from 'react';
import {Link} from 'react-router-dom';
import styles from './css/Producto.module.css';

//Un componente que no es funcional no puede tener ciclos de vida
const Home = () => {

    return (
        <div className={styles.app}>
            <header className={styles.appHeader}>
                <img src="/images/logo_size.jpg" alt="" />
                <h1>Green Shop</h1>
                <button><Link to = '/products'>Entrar</Link></button>
                <button><Link to = '/register'>Register</Link></button>
                <button><Link to = '/login'>Login</Link></button>
            </header>
        </div>
    );

};

export default Home;