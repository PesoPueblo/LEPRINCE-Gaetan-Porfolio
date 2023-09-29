import '../styles/App.css';
import Presentation from './presentation';
import Details from './details'
import Competences from './competences';
import Works from './projets';
import Contact from './contact';
import img from "../asset/moi.jpg";
import { Routes, Route} from 'react-router-dom';
import{ browserHistory} from 'react-router'


function App() {
  return (
    <div>
      <Routes history={browserHistory}>
        <Route path='/' element={<Presentation
              titre='Bienvenue !!!'
              text='Bonjour, je suis Gaëtan, Développeur Web Front-end Junior'
              img={img}/>
        }></Route>
        <Route exact path='/compétences'element={<Competences/>}></Route>
        <Route exact path='/projets' element={<Works/>}></Route>
        <Route path='/projets/:titre' element={<Details/>}></Route> 
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
