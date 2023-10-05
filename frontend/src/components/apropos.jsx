import { Link } from "react-router-dom";

export default function Apropos() {
    return (
            <div id="apropos" className="section ">
                <h2 className="title">Qui suis-je ?</h2>
                <div>
                    <p className="Text">
                        J'ai, dans un premier temps, travaillé pendant plus de 10 ans dans le commerce. Puis j'ai décidé de me lancer dans un domaine qui m'a toujours intéressé. <br />
                        Curieux de savoir ce qui ce passait derrière les écrans, j'ai commencé à apprendre le nécessaire pour savoir coder un site web basique! <br />
                        Curieux d'en apprendre toujours plus j'alterne entre pratique et auto-formation pour acquérir les bases des langages! <br />
                        Grâce à la plateforme OpenClassrooms je me suis lancé dans une formation afin d'avoir un titre de niveau Bac+2 et je ne m'arrêterai pas là ... <br />
                    </p>
                    <p className="Text">
                        Je suis maintenant en recherche d'une entreprise pour validé un titre RNCP de niveau 6 de <em>Concepteur Développeur d'Application</em>! <br />
                        Vous pouvez <Link to={require('../asset/cv_GAETAN_LEPRINCE.pdf')} target="_blank" download className="link">télécharger ici mon cv</Link> ou aller dans la rubrique <Link to="/contact" className="link">Me contacter</Link> pour avoir plus d'infos ou discuter plus en détails d'un opportunité! 
                    </p>
                </div>
            </div>
        
    )
}