
import { Link } from 'react-router-dom';
import '../styles/work.css'
export default function Gallery({data}) { 
    


    return(
        <div>
            {data.map((work)=>{
                function keepId(){
                    sessionStorage.setItem("workId" , work.id)

                };
                return (
                    <div key={work.id} className='workCard' >
                        <img src={work.image[0]} alt={"preview projet "+ work.titre} className='workImage'/>
                        <h2 className='workTitle'>{work.titre}</h2>
                        <Link to={`/projets/${work.titre}`} className='seeMore' onClick={keepId} aria-label='en savoir plus sur ce projet'>
                            <span>En savoir plus</span> 
                            <i className="fa-solid fa-plus" />
                        </Link>
                    </div>
                )
            })}
        </div>
    )
} 