import { Link } from 'react-router-dom';
import style from './cabecalho.module.css';


function Cabecalholink({url, children}){
    return(
        <Link to={url} className={style.link}>
            {children}

        </Link>

    )
};
export default Cabecalholink;