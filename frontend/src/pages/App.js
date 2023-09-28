import '../styles/App.css';
import Presentation from './presentation';
import Details from './details'
import Competences from './competences';
import Works from './projets';
import Contact from './contact';
import img from "../asset/moi.jpg";
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Presentation
              titre='Bienvenue !!!'
              text='Bonjour, je suis Gaëtan, Développeur Web Front-end Junior'
              img={img}/>
        }></Route>
        <Route path='/#/compétences'element={<Competences/>}></Route>
        <Route path='/#/projets' element={<Works/>}></Route>
        <Route path='/#/projets/:titre' element={<Details/>}></Route> 
        <Route path='/#/contact' element={<Contact/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
