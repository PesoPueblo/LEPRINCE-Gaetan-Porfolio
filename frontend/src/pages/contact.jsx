import { Link } from "react-router-dom"
import { FormikForm } from "../components/contact"
import '../styles/contact.css'
export default function Contact (){
    return(
        <div id="contact" className="section">
            <h1 className="title">Pour me Contacter ? </h1>
                <FormikForm/>
                <p className="Text">
                    Vous voulez discuter avec moi d'un projet ou vous souhaitez en savoir plus. <br />
                    N'hésitez pas à :<br /> 
                    Remplir le formulaire de contact <br/>
                    Me contacter sur  <Link to="https://www.linkedin.com/in/gaetan-leprince-012601137/" className="link" target="_blank">linkedin</Link> <br />
                    M'envoyer un mail à <a href="mailto:leprince.gaetan@yahoo.fr" className="link" >leprince.gaetan@yahoo.fr</a> 
                </p>
        </div>
    )
}