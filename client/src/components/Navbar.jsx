import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return(
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div>
            <a className="navbar-brand" href="#">Cart.ly</a>
              <Link to="/shop" href="/shop">Shop</Link>
            <span className="navbar-text">
              <Link to="/cart" href="/cart">Your Cart</Link>
            </span>
            <span>
              {this.props.cart.length}
            </span>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;