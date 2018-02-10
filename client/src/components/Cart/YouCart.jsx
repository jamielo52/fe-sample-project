import React, { Component } from 'react';
import InCart from './InCart';

class YourCart extends Component {
  constructor(props){
    super(props)
    
  }

  render(){
    return(
      <div>
        <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title" id="myModalLabel">Your Cart</h4>
              </div>
              <div className="modal-body">
                <div>
                  {
                    Object.keys(this.props.cart).length === 0 ? 'Nothing in your cart, start shopping.' :
                    Object.keys(this.props.cart).map((key, i) => {
                      return(
                        <div key={i}>
                          <InCart id={key} product={this.props.cart[key]} removeFromCart={this.props.removeFromCart}/>
                        </div>
                      )
                    })
                  }
                </div>
                <div>
                  Total
                  <span>{
                    Object.keys(this.props.cart).length === 0 ? '$0' :
                    '$' + Object.values(this.props.cart).map(product => (product.price / 100))
                                                        .reduce((producta, productb) => producta + productb)
                  }</span>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" data-dismiss="modal">Back</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default YourCart;