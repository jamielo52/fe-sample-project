import React from 'react';

const InCart = (props) => {
  return (
    <div>
      <img className="card-img-top" src={require(`../../../public/images/${props.product.filename}`)} alt="Card image cap" />
      <span>
        <div>
          {props.product.name}
          <span>
            <button onClick={((e) => props.removeFromCart(e, props.id))}>x</button>
          </span>
        </div>
        <div>{'$' + (props.product.price / 100).toString()}</div>
      </span>
    </div>
  )
}


export default InCart;