
import Footer from '../components/footer'
import Nav from '../components/nav'
import Gallery from '../components/work'
import '../styles/work.css'
export default function Works(){
  
    //render
        return(
            <div>
                <Nav/>
            <div id="projets" className="works-gallery section">
                <h2 className='title'>Mes Projets</h2>
                <Gallery/>
            </div>
                <Footer/>
            </div>
        )
    };