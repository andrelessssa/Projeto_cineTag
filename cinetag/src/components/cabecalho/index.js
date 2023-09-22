import { Link } from "react-router-dom";
import logo from './logo.png';
import style from './cabecalho.module.css';
import Cabecalholink from "components/cabecalhoLink";

function Cabecalho(){
    return(
        <header className={style.Cabecalho}>
            <Link to="./">
                <img src={logo} alt="logo"></img>
            </Link>
            <nav>
                <Cabecalholink url="./">
                    Home
                </Cabecalholink>
                <Cabecalholink url="./Favoritos">
                    Favoritos
                </Cabecalholink>
            </nav>

        </header>
    )
};
export default Cabecalho;