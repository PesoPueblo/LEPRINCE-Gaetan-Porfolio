
import "../styles/presentation.css";
import Apropos from "../components/apropos";
import {Link} from 'react-router-dom';

export default function Presentation({titre, text , img}){
    //comportement
 function image() {
    if (img!= null){
        return(
            <img src={img} alt="profil de Gaëtan LEPRINCE" className="photo" />
        )
    }
 }
    return(
        <div className="main">
        <div className="section">
            {image()}
            <div className="content">
                <h1 className="title">{titre}</h1>
                <p className="Text">{text}</p>
                <div className="LinkRS">
                    <Link to="https://www.linkedin.com/in/gaetan-leprince-012601137/" className="linkres" target="_blank" aria-label="suivez moi sur linkedin"><i className="fa-brands fa-linkedin"></i></Link>
                    <Link to="https://github.com/PesoPueblo" className="linkres" target="_blank" aria-label="visitez ma page github"><i className="fa-brands fa-square-github"></i></Link>
                </div>
            </div>
            
        </div>
        <Apropos/>
        </div>
    );
}