import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import Nav from './components/nav';
import Footer from './components/footer';
import {HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
           <Nav/>
           <App/>
           <Footer/>
    </HashRouter>
);

