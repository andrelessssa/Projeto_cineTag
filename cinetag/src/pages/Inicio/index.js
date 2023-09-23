import Banner from "components/banner";

import Card from "components/card";

import Titulo from "components/titulo";
import videos from 'json/db.json';
import styles from './inicio.module.css';


function Inicio(){
    return(
    <>
       
       <Banner imagem="home"/>
       <Titulo>
            <h1>Um lugar para guardar seus vídeos e filmes!</h1>
       </Titulo>
       <section className={styles.container}>
        {videos.map((video) =>{
           return <Card {...video} key={video.id} />
        })}

       </section>
     
       
    </>
    )
};
export default Inicio;