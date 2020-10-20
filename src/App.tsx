import React from 'react';


import './styles/global.css';
import './styles/pages/landing.css';

import Logo from './images/Logo.png';


function App() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={Logo} alt="main"></img>
        <main>          
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Rio de Janeiro</strong>
          <span>Santa Catarina</span>
        </div>

        <a href="#" className="enter-app">

        </a>

      </div>
    </div>
  );
}

export default App;
