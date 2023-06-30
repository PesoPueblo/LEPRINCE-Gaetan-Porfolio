import "../styles/nav.css"
import img from "../asset/moi.jpg"
import { Link } from "react-router-dom"
export default function Nav () {
        const menuButton = document.querySelector("#menu-button");
        const menu = document.querySelector(".menu")
    function openMenu(){

        if (menuButton.className === "fa-solid fa-bars") {
        menuButton.setAttribute("class", "fa-solid fa-xmark")
        menu.setAttribute("style","display:flex")

            } else if (menuButton.className === "fa-solid fa-xmark") {
                menuButton.setAttribute("class", "fa-solid fa-bars");
                menu.setAttribute("style","display:none")
            }
    };
    function handleResized(){
        const widthWindow = window.innerWidth;
        if (widthWindow>950 && menu.style.display=== "none"){
            menu.setAttribute("style", "display:flex")
        }
    };
    window.addEventListener("resize", handleResized)
    
    return (
        <div className="header">
            <img src={img} alt="Gaëtan LEPRINCE" />
            <i id="menu-button" className="fa-solid fa-bars" onClick={openMenu}></i>
            <menu className="menu">
                <li><Link to="/" className="nav-link">A Propos</Link></li>
                <li><Link to="/compétences" className="nav-link">Mes Compétences</Link></li>
                <li><Link to="/projets"className="nav-link">Mes Projets</Link></li>
                <li><Link to="/contact"className="nav-link">Me contacter</Link></li>
            </menu>

        </div>
    )
}