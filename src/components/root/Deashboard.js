import React, { Component } from 'react'
import { Row,Col } from "reactstrap";
import CategoryList from '../categories/CategoryList';
import ProductList from '../products/ProductList';

export default class Deashboard extends Component {
  render() {
    return (
      <div>
        <Row>
        <Col xs="3">
        <CategoryList>
            
        </CategoryList>
        </Col>
        </Row>
        <Row>
        <Col xs="9">
        <ProductList>

        </ProductList>
        </Col>
        </Row>
      </div>
    )
  }
}
