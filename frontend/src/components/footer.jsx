import "../styles/footer.css"
import { Link } from "react-router-dom"
export default function Footer () {
    return (
        <footer className="footer">
            <h2>G.L</h2>
            <p>Gaëtan Leprince</p>
            <div className="LinkRS">
                    <Link to="https://www.linkedin.com/in/gaetan-leprince-012601137/" className="linkres-footer" target="_blank"aria-label="suivez moi sur linkedin"><i className="fa-brands fa-linkedin"></i></Link>
                    <Link to="https://github.com/PesoPueblo" className="linkres-footer" target="_blank" aria-label="visitez ma page github"><i className="fa-brands fa-square-github"></i></Link>
            </div> 
        </footer>
    )
}