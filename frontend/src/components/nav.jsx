import "../styles/nav.css"
import img from "../asset/gaetan.jpg"
import { Link } from "react-router-dom"
export default function Nav () {
        
    function openMenu(){
        const menuButton = document.querySelector("#menu-button");
        const menu = document.querySelector(".menu")

        if (menuButton.className === "fa-solid fa-bars") {
        menuButton.setAttribute("class", "fa-solid fa-xmark")
        menu.setAttribute("style","display:flex")

            } else if (menuButton.className === "fa-solid fa-xmark") {
                menuButton.setAttribute("class", "fa-solid fa-bars");
                menu.setAttribute("style","display:none")
            }
    };
    function resetDisplay() {
        const menuButton = document.querySelector("#menu-button");
        const menu = document.querySelector(".menu")
        if(window.innerWidth>950){
            menu.setAttribute("style","display:flex")
        } else {
            menuButton.setAttribute("class", "fa-solid fa-bars");
            menu.setAttribute("style","display:none")

        }
    };
   
    window.addEventListener("resize",resetDisplay)
    

    return (
        <header className="header" >
            <img src={img} alt="Gaëtan LEPRINCE" />
            <i id="menu-button" className="fa-solid fa-bars" onClick={openMenu}></i>
            <nav className="menu">
                <li><Link to="/" className="nav-link">Accueil</Link></li>
                <li><Link to="/compétences" className="nav-link">Mes Compétences</Link></li>
                <li><Link to="/projets"className="nav-link">Mes Projets</Link></li>
                <li><Link to="/contact"className="nav-link">Me contacter</Link></li>
            </nav>

        </header>
    )
}