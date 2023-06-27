import { useState,useEffect } from "react";
import '../styles/details.css'
import GalleryPhoto from "../components/gallery";

export default function Details() {
    //state
    
        const idProject = sessionStorage.getItem("workId");
    const [data,setData] = useState([]);
    const [image,setImage]=useState([]);
    const [technologie,setTechnologie]=useState([]);
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_SERVER_URL}/api/works/${idProject}`)
            .then(prom=>prom.json())
            .then(data=>{setData(data);setImage(data.image);setTechnologie(data.technologie)})
            .catch(err=>console.log(err));
    },[]);
    function contentTechno (){
        if (typeof technologie === 'string'|| technologie instanceof String){
          return ( 
            <p>Outils utilisés: <br />{technologie}</p>
          )
        }
        else {const techno= []
          for (let index = 0; index < technologie.length; index++) {
            techno.push(
                <li key={`${technologie[index]}`}>{technologie[index]}</li>
            )
              
          }return (
            <p>Outils utilisés: <br />{techno}</p>
          )
          }
      }

    return (
        <div><div className='details'>
            <img src={image[0]} alt="preview 1" className="preview"/>
            <div className='infos'>
                <h3 className="title">{data.titre}</h3>
                <p>Année: <br /> {data.année}</p>
                <p>Mission : <br /> {data.context}</p> 
                <p>Liens: <br /> {data.lien}</p>
                 {contentTechno()}
            </div>
        </div>
        <div className="allImages">
            <GalleryPhoto image={image}/>
        </div>
        </div>
    )
}

