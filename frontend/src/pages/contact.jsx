import { Link } from "react-router-dom"
import { Form } from "../components/contact"
import '../styles/contact.css'
export default function Contact (){
    return(
        <div id="contact" className="section">
            <h1 className="title">Pour me Contacter ? </h1>
                <Form/>
                <p className="Text">
                    Vous voulez discuter avec moi d'un projet ou vous souhaitez en savoir plus, <br />
                    n'hésitez pas à remplir le formulaire de contact, <br/>
                    à me contacter sur  <Link to="https://www.linkedin.com/in/gaetan-leprince-012601137/" className="contact-link" target="_blank">linkedin</Link>. <br />
                    ou par email: <a href="mailto:leprince.gaetan@yahoo.fr">leprince.gaetan@yahoo.fr</a> 
                </p>
        </div>
    )
}