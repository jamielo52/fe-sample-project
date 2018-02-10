import React, { Component } from 'react';
import Navbar from './Navbar';
import YourCart from './Cart/YouCart';
import Products from './Products';
import ProductList from '../../../product-payload.json';
import './app.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      cart: {}
    }

    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  addToCart(e, product, id) {
    const newCart = Object.assign({}, this.state.cart, {[id]: product})

    this.setState({
      cart: newCart
    });
  }

  removeFromCart(e, id) {
    console.log('im clicking', id)
    let newCart = Object.assign({}, this.state.cart);
    delete newCart[id]

    this.setState({
      cart: newCart
    })
  }

  render() {
    return (
      <div>
        <Navbar cart={this.state.cart}/>
        <div  className="background-container">
          <h2>Shop Our Featured Collection</h2>
          <div className="container">
            <div className="row">
              {ProductList.products.map((product, i) => {
                return(
                  <div className="col-md-3" key={i}>
                    <Products id={i} product={product} addToCart={this.addToCart}/>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div>
          <YourCart cart={this.state.cart} removeFromCart={this.removeFromCart}/>
        </div>
      </div>
    );
  }
}


export default App;
