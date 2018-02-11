import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return(
      <div>
        <nav className="navbar">
          <i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
          <a className="navbar-brand nav-text" href="#">Cart.ly</a>
          <a className="shop mr-auto">Shop</a>
          <span className="navbar-text">
            <div className="nav-cart" data-toggle="modal" data-target="#myModal">Your Cart</div>
          </span>
          <span className="cartCount">
            {Object.keys(this.props.cart).length}
          </span>
        </nav>
      </div>
    );
  }
}

export default Navbar;