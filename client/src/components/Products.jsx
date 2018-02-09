import React from 'react';

const Products = (props) => {
  return (
    <div className="card-deck">
      <div className="card">
        <img className="card-img-top" src={require(`../../public/images/${props.product.filename}`)} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{props.product.name}</h5>
          <div className="card-text">{'$' + props.product.price.toString().substring(0, props.product.price.toString().length-2) + "." + props.product.price.toString().substring(props.product.price.toString().length-2)}</div>
          <button onClick={((e) => props.addToCart(e, props.product))}>Add to cart</button>
        </div>
      </div>
    </div>
  )
}


export default Products;
