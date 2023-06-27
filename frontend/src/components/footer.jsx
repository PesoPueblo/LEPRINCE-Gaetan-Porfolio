import "../styles/footer.css"
import { Link } from "react-router-dom"
export default function Footer () {
    return (
        <div className="footer">
            <h2>G.L</h2>
            <p>Gaëtan Lepince</p>
            <div className="LinkRS">
                    <Link to="https://www.linkedin.com/in/gaetan-leprince-012601137/" className="linkres-footer"><i className="fa-brands fa-linkedin"></i></Link>
                    <Link to="https://github.com/PesoPueblo" className="linkres-footer"><i className="fa-brands fa-square-github"></i></Link>
            </div> 
        </div>
    )
}