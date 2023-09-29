import Tech from '../components/compt/tech'
import '../styles/compet.css'
export default function Competences() {
    //création de constante pour faire appel au image static 
    const html = require('../asset/html.png');
    const css = require('../asset/css.png');
    const reactjs = require('../asset/react.png');
    const nodejs = require('../asset/nodejs.png');
    const mongodb = require('../asset/MongoDB.png');
    const js = require('../asset/js.png');
    const git = require('../asset/Git.png');
    const gh = require('../asset/GitHub.png');
    const figma = require('../asset/figma.png');
    const notion = require('../asset/notion.png');


    return (
            <div id="compétences" className="competence-gallery section">
                <h2 className='title'>Mes compétences</h2>
                <div className='compet-gallery'>
                    <div className='CompCard'>
                        <h3 className='compTitle' >Front-End</h3>
                        <div className='list'>
                            <Tech img={html} name="HTML" />
                            <Tech img={css} name="CSS" />
                            <Tech img={js} name="JavaScript" />
                            <Tech img={reactjs} name="REACT" />
                        </div>
                    </div>
                    <div className='CompCard'>
                        <h3 className='compTitle'>Back-End</h3>
                        <div className='list'>
                            <Tech img={js} name="JavaScript" />
                            <Tech img={nodejs} name="NodeJS" />
                            <Tech img={mongodb} name="MongoDB" />
                        </div>
                    </div>
                    <div className='CompCard'>
                        <h3 className='compTitle' >Autres</h3>
                        <div className='list'>
                            <Tech img={git} name="Git" />
                            <Tech img={gh} name="GitHub" />
                            <Tech img={figma} name="Figma" />
                            <Tech img={notion} name="Notion" />
                        </div>
                    </div>
                </div>


            </div>
}