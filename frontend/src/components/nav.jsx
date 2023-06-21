import "../styles/nav.css"
import img from "../asset/moi.jpg"
export default function Nav () {
    return (
        <div className="header">
            <img src={img} alt="Gaëtan LEPRINCE" />
            <nav>
                <li><a href="#" className="nav-link">A Propos</a></li>
                <li><a href="#compétences" className="nav-link">Compétences</a></li>
                <li><a href="#projets"className="nav-link">Mes Projets</a></li>
                <li><a href="#contact"className="nav-link">Me contacter</a></li>
            </nav>

        </div>
    )
}