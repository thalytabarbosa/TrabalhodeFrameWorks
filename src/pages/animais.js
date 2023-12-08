import React from 'react';
import styles from '../styles/Animais.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

function Users({ users }) {
  return (

    <div className={styles.body}>
      <Navbar />

      <h1 className={styles.h1}> Animais cadastrados </h1>
      {users.map((user, index) => (
        <Link href='/profile/[id]' as={`/profile/${index}`}>
          <div className={styles.animais}>
            <div key={user.id}> <p className={styles.p1}>Animal: {user.nome} </p> </div>
          </div>
        </Link>
      ))}

      <Footer />
    </div>
  )
}

export const getStaticProps = (async (context) => {
  const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=animal')
  const repo = await res.json()
  const users = await repo;
  return {
    props: { users }
  }
})

export default Users;