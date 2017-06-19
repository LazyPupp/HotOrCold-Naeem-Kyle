import React from 'react';
import './navBar.css';

export default function navBar(props){
  const links = props.links.map((link,index)=>{
    return (<li key={index}>
      <a href={link.href} className={link.name}>
        {link.text}
      </a>
    </li>);
  });

  return (
    <nav className ="nav-bar">
      <ul>
        {links}
      </ul>  
    </nav>
  );
}

navBar.defaultProps={
    links:[]
}
