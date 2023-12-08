import React from 'react';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

function Users({ users }) {
  return (
    <div className={styles.body}>
      <Navbar />

      {/* Conteúdo da Página Inicial */}
      <div className={styles.homeContent}>
        <h1>Seja Bem-vindo ao Nosso Site de Áudio Descrição!</h1>
        <p>
          Nosso objetivo é proporcionar uma experiência inclusiva para pessoas cegas, oferecendo um banco de dados rico em áudio descrições de imagens. 
          Entendemos a importância da acessibilidade e estamos comprometidos em tornar o mundo digital mais acessível a todos.
        </p>
        
        <Link href="/animais">
          <p>Explore nosso conteúdo</p>
        </Link>
      </div>

      <Footer />
    </div>
  );
}

export const getStaticProps = async (context) => {
  const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=animal');
  const repo = await res.json();
  const users = await repo;
  return {
    props: { users }
  };
};

export default Users;
