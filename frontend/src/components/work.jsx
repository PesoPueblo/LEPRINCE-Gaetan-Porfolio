
import travaux from '../data/travaux.json'
import '../styles/work.css'
export default function Works(){


    return(
        <div id="projets" className="works-gallery section">
            <h2 className='gallery-title titre'>Mes Projets</h2>
            <div>
              {travaux.map((work)=>{
                return (
                    <div key={work._id} className='workCard'>
                        <img src={work.image[0]} alt="preview 1 " className='workImage'/>
                        <h3 className='workTitle'>{work.titre}</h3>
                        <div className='seeMore'>
                            <p>En savoir plus</p> 
                            <i className="fa-solid fa-plus" />
                        </div>
                    </div>
                )
            })}  
            </div>
            

        </div>
    )
}