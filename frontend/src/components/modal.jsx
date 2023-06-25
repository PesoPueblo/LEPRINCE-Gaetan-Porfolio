import { useState,useEffect } from "react";

export default function Modal() {
    //state
    
        const idProject = sessionStorage.getItem("workId");
    const [data,setData] = useState([]);
    const [image,setImage]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:4000/api/works/${idProject}`)
            .then(prom=>prom.json())
            .then(data=>{setData(data);setImage(data.image)})
            .catch(err=>console.log(err));
    },[]);

    return (
        <div className='modal'>
            <img src={image[0]} alt="preview 1" />
            <div className='infos'>
                <h3>{data.titre}</h3>
                <p>Année: {data.année}</p>
                <p>Mission : <br /> {data.context}</p> 
            </div>
        </div>
    )
}

