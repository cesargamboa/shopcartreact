import React, { Component } from 'react';
import Header from './Header';
import Cart from './Cart'
import './App.css';
import Items from './Items'


class App extends Component {
  addCart = (price, game) => {

    let newCartCopy = [game + " "];

    this.setState({
      count: this.state.count + 1,
      price: this.state.price + price,
      game: this.state.game + game,
      newCart: newCartCopy + this.state.newCart,
    })
  }
  clearCart = () => {
    this.setState({
      count: 0,
      price: 0,
      game: null,
      newCart: [],
    })
  }
  state = {
    //Array of the objects that we want to use 
    items: [
      { key: 1, game: "Mass Effect", price: 29, img: './images/masseffect.jpg' },
      { key: 2, game: "God of War 4", price: 39, img: './images/godofwar4.jpg' },
      { key: 3, game: "Fallen", price: 19, img: './images/fallen.jpg' },
      { key: 4, game: "Watch Dogs 2", price: 35, img: './images/watchdogs.jpg' },
      { key: 5, game: "Resident Evil", price: 24, img: './images/residentevil.jpg' },
      { key: 6, game: "Battle Field", price: 15, img: './images/battlefield.jpg' },
      { key: 7, game: "UFC", price: 21, img: './images/ufc.jpg' },
      { key: 8, game: "Okami", price: 20, img: './images/okami.jpg' },
      { key: 9, game: "Omen of sorrow", price: 21, img: './images/omenofsorrow.jpg' },
      { key: 10, game: "Last Guardian", price: 5, img: './images/lastguardian.jpg' },
    ],
    count: 0,
    price: 0,
    newCart: [],
    showCart: false
  }
  toggleCart = () => {
    const doesShow = this.state.showCart;
    this.setState({ showCart: !doesShow });
  }
  //render objects 
  render() {

    let showed = null;
    let items = null;

    items = (
      //Dinamic list of the objects 

      <div>

        {this.state.items.map((items, key) => {
          return <Items

            game={items.game}
            price={items.price}
            img={items.img}
            key={items.key}
            changed={this.addCart} />

        })}

      </div>
    );

    items = (
      //Dinamic list of the objects 

      <div>

        {this.state.items.map((items, key) => {
          return <Items

            game={items.game}
            price={items.price}
            img={items.img}
            key={items.key}
            changed={this.addCart} />

        })}

      </div>
    );
    //show cart
    if (this.state.showCart) {
      showed = (
        <div className="container col-md-8 offset-md-2 card border-warning mb-3">
          <Cart newCart={this.state.newCart} price={this.state.price} click={this.clearCart} />
        </div>
      )

    }
    //Elements to return 
    return (
      <div className="App">

        <Header counter={this.state.count} price={this.state.price} clicked={this.toggleCart
        } />
        {showed}
        {items}

      </div>
    );

  }
}

export default App;
