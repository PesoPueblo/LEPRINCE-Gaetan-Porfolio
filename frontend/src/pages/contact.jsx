import { Link } from "react-router-dom"
export default function Contact (){
    return(
        <div id="contact" className="section">
            <h2 className="title">Pour me Contacter ? </h2>
            <p className="Text">
                Vous voulez discuter avec moi d'un projet ou vous souhaitez en savoir plus, <br />
                n'hésitez pas à me contacter sur  <Link to="https://www.linkedin.com/in/gaetan-leprince-012601137/" className="contact-link" target="_blank">linkedin</Link>. <br />
                ou par email: <a href="mailto:leprince.gaetan@yahoo.fr">leprince.gaetan@yahoo.fr</a> 
            </p>
           
        </div>
    )
}