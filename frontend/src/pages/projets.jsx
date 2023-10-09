import Gallery from '../components/work'
import '../styles/work.css'
export default function Works({data}){

    //render
        return(
            <div id="projets" className="works-gallery section">
                <h1 className='title'>Mes Projets</h1>
                <Gallery data={data}/>
            </div>
        )
    };