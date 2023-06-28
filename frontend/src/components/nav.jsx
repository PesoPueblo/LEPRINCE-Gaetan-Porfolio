import "../styles/nav.css"
import img from "../asset/moi.jpg"
import { Link } from "react-router-dom"
export default function Nav () {
    return (
        <div className="header">
            <img src={img} alt="Gaëtan LEPRINCE" />
            <menu>
                <li><Link to="/" className="nav-link">A Propos</Link></li>
                <li><Link to="/compétences" className="nav-link">Mes Compétences</Link></li>
                <li><Link to="/projets"className="nav-link">Mes Projets</Link></li>
                <li><Link to="/contact"className="nav-link">Me contacter</Link></li>
            </menu>

        </div>
    )
}