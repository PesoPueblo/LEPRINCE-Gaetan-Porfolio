import Footer from "../components/footer";
import Nav from "../components/nav";

export default function Apropos() {
    return (
        <div>
            <Nav/>
            <div id="apropos" className="section ">
                <h2 className="title">Qui suis-je ?</h2>
                <div>
                    <p className="Text">
                        J'ai, dans un premier temps, travaillé pendant plus de 10 ans dans le commerce. Puis j'ai décidé de me lancer dans un domaine qui m'a toujours intéressé. <br />
                        Curieux de savoir ce qui ce passait derrière les écrans, j'ai commencé à apprendre le nécessaire pour savoir coder un site web basique! <br />
                        Curieux d'en apprendre toujours plus j'alterne entre pratique et auto-formation pour acquérir les bases des langages! <br />
                        Grâce à la plateforme OpenClassrooms je me suis lancé dans une formation afin d'avoir un titre de niveau Bac+2 et je ne m'arrêterai pas là ... <br />
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}