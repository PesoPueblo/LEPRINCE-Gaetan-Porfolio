import "../styles/presentation.css";
import Apropos from "./apropos";
import {Link} from 'react-router-dom';

export default function Presentation({titre, text , img}){
    //comportement
 function image() {
    if (img!= null){
        return(
            <img src={img} alt={img} className="photo" />
        )
    }
 }
    return(
        <div>
        <div className="section">
            <div className="content">
                <h1 className="title">{titre}</h1>
                <p className="Text">{text}</p>
                <div className="LinkRS">
                    <Link to="https://www.linkedin.com/in/gaetan-leprince-012601137/" className="linkres"><i className="fa-brands fa-linkedin"></i></Link>
                    <Link to="https://github.com/PesoPueblo" className="linkres"><i className="fa-brands fa-square-github"></i></Link>
                </div>
            </div>
            {image()}
        </div>
        <Apropos/>
        </div>
    );
}