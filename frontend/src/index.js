import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import Nav from './components/nav';
import Footer from './components/footer';
import {BrowserRouter as Router} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Nav/>
      <App />
      <Footer/>
    </Router>
  </React.StrictMode>
);

