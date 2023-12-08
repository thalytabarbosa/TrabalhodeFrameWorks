import React from 'react';
import styles from '../styles/Components.module.css';

function Navbar() {
    return (
        <div className={styles.navbar}>
            <a href="/" className={styles.active}>Home</a>
            <a href="/animais">Animais</a>
            <h2>Descrição animais</h2>
        </div>
    );
}

export default Navbar;