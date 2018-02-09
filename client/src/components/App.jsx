import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import YourCart from './YouCart';
import Products from './Products';
import ProductList from '../../../product-payload.json';
import './app.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      cart: []
    }

    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(e, product) {
    
    this.setState({
      cart: [...this.state.cart, product]
    });

    console.log('Im clicking', this.state.cart);
  }

  render() {
    return (
      <div>
        <Navbar cart={this.state.cart}/>
        <h2>Shop Our Featured Collection</h2>
        <div className="container">
          <div className="row">
            {ProductList.products.map((product, i) => {
              return(
                <div className="col-md-3" key={i}>
                  <Products product={product} addToCart={this.addToCart}/>
                </div>
              )
            })}
          </div>
        </div>

        <Switch>
          <Route path="/cart" render={() => <YourCart />} />
        </Switch>
      </div>
    );
  }
}


export default App;
