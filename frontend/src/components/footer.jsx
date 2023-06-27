import "../styles/footer.css"
import { Link } from "react-router-dom"
export default function Footer () {
    return (
        <div className="footer">
            <h1>G.L</h1>
            <p>Gaëtan Lepince</p>
            <div className="LinkRS">
                    <Link to="https://www.linkedin.com/in/gaetan-leprince-012601137/" className="linkres"><i className="fa-brands fa-linkedin"></i></Link>
                    <Link to="https://github.com/PesoPueblo" className="linkres"><i className="fa-brands fa-square-github"></i></Link>
            </div> 
        </div>
    )
}