
import Gallery from '../components/work'
import '../styles/work.css'
export default function Works(){
  
    //render
        return(
            <div id="projets" className="works-gallery section">
                <h2 className='gallery-title titre'>Mes Projets</h2>
                <Gallery/>
            </div>
        )
    };