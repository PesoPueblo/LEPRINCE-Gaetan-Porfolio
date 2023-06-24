import work from '../../../backend/models/work';
import '../styles/work.css'
import { useState, useEffect } from 'react';
export default function Works(){
    const [data,setData] = useState([]);
const [tech , setTech]= useState([]);
    useEffect(()=>{
        fetch("http://localhost:4000/api/works")
        .then(prom=>prom.json())
        .then(data=>{setData(data);setTech(data.technologie)})
        .catch(err=>console.log(err));
    },[])
    function techno (){
        const outils=[]
        for (let i = 0; i < tech.length; i++) {
            outils.push(
                <li key={`${tech[i]}`}>{tech[i]}</li>
            )            
        }
        return outils
    };
    function openModal(){
        return(
            <div className='modal'>
                <img src={work.image[0]} alt="preview 1" />
                <div className='infos'>
                    <h3>{work.titre}</h3>
                    <p>Année: {work.année}</p>
                    <p>Mission : <br /> {work.context}</p>
                    {techno()}               
                </div>

            </div>
        )
    }
        return(
            <div id="projets" className="works-gallery section">
                <h2 className='gallery-title titre'>Mes Projets</h2>
                <div>
                    {data.map((work)=>{
                        return (
                            <div key={work.titre} className='workCard' onClick={openModal()}>
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
    };