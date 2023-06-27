import { Link } from "react-router-dom"

export default function Contact (){
    return(
        <div id="contact" className="section">
            <h2 className="title">Pour me Contacter : </h2>
            <ul>
                <li><i className="fa-solid fa-at" ></i> leprince.gaetan@yahoo.fr</li>
                <li><i className="fa-solid fa-square-phone" ></i> 06.33.39.79.40</li>
                <li >
                    <Link to="https://www.linkedin.com/in/gaetan-leprince-012601137/" className="rs"><i className="fa-brands fa-linkedin"></i></Link>
                    <Link to="https://github.com/PesoPueblo" className="rs"><i className="fa-brands fa-square-github"></i></Link>
                </li>
            </ul>
        </div>
    )
}