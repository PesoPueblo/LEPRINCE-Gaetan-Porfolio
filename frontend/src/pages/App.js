import '../styles/App.css';
import Presentation from './presentation';
import Apropos from './apropos';
import Competences from './competences';
import Works from '../components/work';
import Contact from './contact';
import img from "../asset/moi.jpg";


function App() {
  return (
    <div>
      <Presentation 
        titre='Bienvenue !!!'
        text='Bonjour, je suis Gaëtan Développeur Web Front-end Junior'
        img={img}
      />
      <Apropos/>
      <Competences/>
      <Works/>

      <Contact/>
    </div>
  );
}

export default App;
