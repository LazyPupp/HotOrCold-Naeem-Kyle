import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './navBar';
import GuessBox from './guessBox';
import MainScreen from './main';
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

ReactDOM.render(<MainScreen />, document.getElementById('root'));
// ReactDOM.render(<NavBar links={links} />, document.getElementById('root'));
// ReactDOM.render(<GuessBox title="Make your guess"/>, document.getElementById('root'));
registerServiceWorker();
