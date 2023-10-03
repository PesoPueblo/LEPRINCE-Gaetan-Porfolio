import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import Nav from './components/nav';
import Footer from './components/footer';
import {BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
           <Nav/>
           <App/>
           <Footer/>
    </BrowserRouter>
);

