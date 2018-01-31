import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Items from './Items'
import masseffect from './images/masseffect.jpg'


class App extends Component {
  
  state={
    items: [
      {key: 1, game: "Mass Effect", price: 29},
      {key: 2, game: "God of War 4", price: 39},
      {key: 3, game: "Fallen", price: 19, img:'./images/masseffect.jpg'}
    ]
  }

  
  

  render() {
   
    return (
      <div className="App">
        <Items game={this.state.items[0].game}price={this.state.items[0].price}img={masseffect}/>
        <Items game={this.state.items[1].game}price={this.state.items[1].price} img={masseffect}/>
        <Items game={this.state.items[2].game}price={this.state.items[2].price} img={masseffect}/>
        
        
      </div>
    );
  }
}

export default App;
