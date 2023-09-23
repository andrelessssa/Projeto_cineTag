
import Banner from 'components/banner';
import Titulo from 'components/titulo';
import Card from 'components/card';
import styles from './favoritos.module.css';

function Favoritos(){
    return(
        <>
        
            <Banner imagem="favoritos"/>
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                <Card id= '1' titulo='Gato bonifacio' capa='https://thecatapi.com/api/images/get?format=src&type=png'/> 
            </section>
        
        </>
    )
};
export default Favoritos;

