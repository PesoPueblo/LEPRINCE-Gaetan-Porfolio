import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/work.css'
export default function Gallery() { 
    
 //state
 const [data,setData] = useState([]);
 //appel de l'API pour tous les projets
 useEffect(()=>{
     fetch(`${process.env.REACT_APP_SERVER_URL}/api/works`)
     .then(prom=>prom.json())
     .then(data=>{setData(data)})
     .catch(err=>console.log(err));
 },[]);

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