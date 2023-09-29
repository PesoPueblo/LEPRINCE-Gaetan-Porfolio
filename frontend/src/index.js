import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Presentation from './pages/presentation';
import Details from './pages/details'
import Competences from './pages/competences';
import Works from './pages/projets';
import Contact from './pages/contact';
import img from "./asset/moi.jpg";
import {BrowserRouter, Route,Routes } from 'react-router-dom';
import '../styles/App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<Presentation
              titre='Bienvenue !!!'
              text='Bonjour, je suis Gaëtan, Développeur Web Front-end Junior'
              img={img}/>
             }>
        </Route>
        <Route path='/compétences'element={<Competences/>}></Route>
        <Route path='/projets' element={<Works/>}></Route>
        <Route path='/projets/:titre' element={<Details/>}></Route> 
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </BrowserRouter>
);

