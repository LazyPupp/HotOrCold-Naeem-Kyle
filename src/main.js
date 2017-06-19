import React from 'react';
import NavBar from './navBar';
import GuessBox from './guessBox';
import './main.css';

export default class MainScreen extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      links :[{
        name:"what",
        href:"#",
        text:"WHAT?"
      },{
       name:"new",
      href:"#",
      text:"+NEW GAME"
      }]
    }
  }
  
  render(){
    // const links = this.state.links.map((link,index)=>{
    //   return <NavBar key={index} index={index} {...link}/>
    // });
    // const guess = <GuessBox title="Make your guess"/>;
    return(
      <div>
        <NavBar links={this.state.links}/>
        <h1>HOT or COLD</h1>
        <ul><GuessBox title="Make your guess!"/></ul>
      </div>
    );
  }
}