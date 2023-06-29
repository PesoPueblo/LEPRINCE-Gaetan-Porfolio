import Tech from '../components/compt/tech'
import '../styles/compet.css'

export default function Competences(){
    //création de constante pour faire appel au image static 
    const html = require('../asset/html.png');
    const css= require('../asset/css.png');
    const reactjs= require('../asset/react.png');
    const nodejs= require('../asset/nodejs.png');
    const mongodb= require('../asset/MongoDB.png');
    const js= require('../asset/js.png');
    const git= require('../asset/Git.png');
    const gh= require('../asset/GitHub.png');
    const figma= require('../asset/figma.png');
    const notion= require('../asset/notion.png');

    
    return(
        <div id="compétences" className="competence-gallery section">
            <h2 className='title'>Mes compétences</h2>
            <div className='compet-gallery'>
                <div className='CompCard'>
                        <h3 className='compTitle' >Front-End</h3>
                        <div className='list'>
                        <Tech img={html} name="HTML" note="4" />
                        <Tech img={css} name="CSS" note="4" />
                        <Tech img={js} name="JavaScript" note="3" />
                        <Tech img={reactjs} name="REACT" note="3" />
                        </div>
                </div>
                <div  className='CompCard'>
                        <h3 className='compTitle'>Back-End</h3>
                        <div className='list'>
                        <Tech img={js} name="JavaScript" note="3" />
                        <Tech img={nodejs} name="NodeJS" note="3" />
                        <Tech img={mongodb} name="MongoDB" note="3" />
                        </div>
                </div>
                <div className='CompCard'>
                        <h3 className='compTitle' >Autres</h3>
                        <div className='list'>
                        <Tech img={git} name="Git" note="4" />
                        <Tech img={gh} name="GitHub" note="3" />
                        <Tech img={figma} name="Figma" note="4" />
                        <Tech img={notion} name="Notion" note="3" />
                        </div>
                </div>
            </div>
            

        </div>
    )
}