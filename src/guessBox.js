import React from 'react';
import './guessBox.css';

export default function guessBox(props){
  return (
    <section className="game">
      <h2>
        {props.title}
      </h2>
      <form>
        <input type="text" placeholder="Enter your Guess" id="userGuess" name="userGuess" className="text" autoComplete="off" maxLength="3" required/>
        <input type="submit" className="button" id="guessButton" name="submit" value="Guess" style={{opacity:1}}/>
      </form>
      <p>
        Guess #<span id="count">0</span>
      </p>
      <ul className="guessBox clearfix" id="guessList"></ul>
    </section>
  );
}

guessBox.defaultProps={
    title:""
}
