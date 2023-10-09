import '../styles/App.css';
import Presentation from './presentation';
import Details from './details'
import Competences from './competences';
import Works from './projets';
import Contact from './contact';
import img from "../asset/gaetan.jpg";
import { useState, useEffect } from 'react';
import { Routes, Route} from 'react-router-dom';

function App() {
  //state
  const [data,setData] = useState([]);
  //appel de l'API pour tous les projets
  useEffect(()=>{
     fetch(`${process.env.REACT_APP_SERVER_URL}/api/works`)
     .then(prom=>prom.json())
     .then(data=>{setData(data)})
      .catch(err=>console.log(err));
  },[]);
  return (
    <main>
      <Routes >
        <Route path='/' element={<Presentation
              titre='Bienvenue !!!'
              text="Bonjour, je suis Gaëtan, Développeur Web Front-end Junior en recherche d'alternance"
              img={img}/>
        }></Route>
        <Route path='/compétences'element={<Competences/>}></Route>
        <Route data= {data} path='/projets' element={<Works/>}></Route>
        <Route path='/projets/:titre' element={<Details/>}></Route> 
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </main>
  );
}

export default App;
