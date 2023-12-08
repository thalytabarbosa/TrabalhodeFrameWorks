import styles from '../../styles/Animaisdesc.module.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
function Profile({ user = {} }) {
    return (
        <div>
            <div className={styles.body}>
            <Navbar />

            <div className={styles.profile}>
                <p>Animal: {user.nome}</p>
                <p>Usuario: {user.usuario}</p>
                <p>Data: {user.data_inclusao}</p>
                <p>Descrição: {user.descricao}</p>
                <div className={styles.lista}> <a href='/animais'>Voltar a lista</a></div>
            </div>
        </div>
        <Footer />
        </div>
    )
}
export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=animal')
    const repo = await res.json()
    const user = await repo[context.params.id];
    return {
        props: { user }
    }
})
export async function getStaticPaths() {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=animal')
    const repo = await res.json()
    const users = await repo;
    const paths = users.map((user, index) => {
        return { params: { id: String(index) } };
    });
    return {
        paths,
        fallback: false,
    };
}
export default Profile;