import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Presentation from './pages/presentation';
import Details from './pages/details'
import Competences from './pages/competences';
import Works from './pages/projets';
import Contact from './pages/contact';
import img from "./asset/moi.jpg";
import { Route} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Route path='/' element={<Presentation
              titre='Bienvenue !!!'
              text='Bonjour, je suis Gaëtan, Développeur Web Front-end Junior'
              img={img}/>
        }></Route>
        <Route exact path='/compétences'element={<Competences/>}></Route>
        <Route exact path='/projets' element={<Works/>}></Route>
        <Route path='/projets/:titre' element={<Details/>}></Route> 
        <Route path='/contact' element={<Contact/>}></Route>
    </Router>
  </React.StrictMode>
);

