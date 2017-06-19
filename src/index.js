import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './navBar';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const links = [{
    name:"what",
    href:"#",
    text:"What"
  },{
    name:"new",
    href:"#",
    text:"New Game"
  }
];

ReactDOM.render(<NavBar links={links} />, document.getElementById('root'));
registerServiceWorker();
