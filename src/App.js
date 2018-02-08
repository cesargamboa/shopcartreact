import React, { Component } from 'react';
import Header from './components/Header';
import Cart from './components/Cart'
import News from './pages/News'
import Releases from './pages/Releases'
import Items from './components/Items';
import axios from 'axios'
//import { Link } from 'react-router';
import { Route, Switch } from 'react-router-dom'
//import { connect } from 'react-redux';


//container 
class App extends Component {

  constructor() {
    super();
    this.state = {
      items: [],
      count: 0,
      price: 0,
      newCart: [],
      showCart: false
    };
    axios.get('http://localhost:8088/api/cartitems/')
      .then(response => {
        this.setState({
          items: response.data
        })
         
      })

  }
  addCart = (price, game) => {

    let newCartCopy = [game + " "];
    //Change the state
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

        {this.state.items.map((items, id) => {
          return <Items

            game={items.game}
            price={items.price}
            img={items.img}
            id={items.id}
            changed={this.addCart} />

        })}

      </div>
    );
    //show cart

    showed = (
      <div className="container col-md-8 offset-md-2 card border-warning mb-3">
        <Cart newCart={this.state.newCart} price={this.state.price} click={this.clearCart} />
      </div>
    )


    //Elements to return and Routing 
    return (
      <div>

        <Header counter={this.state.count} price={this.state.price} clicked={this.toggleCart
        } />

        <Switch>

          <Route path="/bag">
            {showed}
          </Route>
          <Route exact path="/" >
            {items}

          </Route>
          <Route path="/news">{News}</Route>
          <Route path="/releases" component={Releases} />

        </Switch>

      </div>
    );

  }
}
/*const mapStateToProps = state => {
  return {
    game: state.game,
    price: state.price,
    key: state.key,
    count: state.count,
    newCart: state.newCart,
    showCart: state.showCart

  

}*/

export default App;
