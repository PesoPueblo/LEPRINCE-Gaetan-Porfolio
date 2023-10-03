import { useState, useEffect } from 'react';
import { workApi } from '../ressource/Call';
import Gallery from '../components/work'
import '../styles/work.css'
export default function Works(){
   //state
 const [data,setData] = useState([]);
 //appel de l'API pour tous les projets
 useEffect(()=>{
     workApi.then(data=>{setData(data)})
     .catch(err=>console.log(err));
 },[]);
    //render
        return(
            <div id="projets" className="works-gallery section">
                <h2 className='title'>Mes Projets</h2>
                <Gallery data={data}/>
            </div>
        )
    };