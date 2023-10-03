
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
                        <img src={work.image[0]} alt="preview 1 " className='workImage'/>
                        <h3 className='workTitle'>{work.titre}</h3>
                        <Link to={`/projets/${work.titre}`} className='seeMore' onClick={keepId}>
                            <p>En savoir plus</p> 
                            <i className="fa-solid fa-plus" />
                        </Link>
                    </div>
                )
            })}
        </div>
    )
} 