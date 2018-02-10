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
              <button className="navbar-brand" data-toggle="modal" data-target="#myModal">Your Cart</button>
            </span>
            <span>
              {Object.keys(this.props.cart).length}
            </span>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;