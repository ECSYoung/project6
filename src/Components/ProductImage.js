import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ProductText from './ProductText';


class ProductImage extends Component {
  constructor() {
    super();

    this.state = {}
  }

  render() {
    return (
      <div className="productImage">
        <img onClick={(e) => this.props.setActiveID(e, this.props.product.id)} src={this.props.product.api_featured_image} alt={this.props.product.name} />
        <ProductText product={this.props.product} />
        <Link className="reviewLink" to={`/products/${this.props.product.id}`}>Reviews</Link>
      </div>
    );
  }
}

export default ProductImage;