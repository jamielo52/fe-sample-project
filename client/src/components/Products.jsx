import React from 'react';

const Products = (props) => {
  return (
      <div className="card-custom">
        <img className="card-img-top" src={require(`../../public/images/${props.product.filename}`)} alt="Card image cap" />
        <div className="card-body card-text">
          <h5 className="card-title">{props.product.name}</h5>
          <div className="card-text price">{'$' + (props.product.price / 100).toString()}</div>
          <button className="add-cart-button" onClick={((e) => props.addToCart(e, props.product, props.id))}>Add to cart</button>
        </div>
      </div>
  )
}


export default Products;
