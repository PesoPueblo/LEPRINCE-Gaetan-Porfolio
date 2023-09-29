import Footer from "../components/footer";
import Nav from "../components/nav";
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
        <Nav/>
        <div className="section">
            {image()}
            <div className="content">
                <h1 className="title">{titre}</h1>
                <p className="Text">{text}</p>
                <div className="LinkRS">
                    <Link to="https://www.linkedin.com/in/gaetan-leprince-012601137/" className="linkres" target="_blank"><i className="fa-brands fa-linkedin"></i></Link>
                    <Link to="https://github.com/PesoPueblo" className="linkres" target="_blank"><i className="fa-brands fa-square-github"></i></Link>
                </div>
            </div>
            
        </div>
        <Apropos/>
        <Footer/>
        </div>
    );
}