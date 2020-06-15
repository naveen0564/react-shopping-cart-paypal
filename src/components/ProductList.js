import React, { useState } from "react";
import logo from '../logo.svg';
import { Button, Row, Col, Card, Form } from "react-bootstrap";
const ProductList = (props) => {
const onAddToCartClick = ()=> {
  const cart = JSON.parse(localStorage.getItem('cartList'))? JSON.parse(localStorage.getItem('cartList')):[];
  const updatedCart = [...cart,{...props.productItem,quantity: quantity } ]
  console.log(updatedCart);
  localStorage.setItem('cartList',JSON.stringify(updatedCart));
  console.log(JSON.parse(localStorage.getItem('cartList')))
};
const [quantity, setQuantity]  = useState(1);
  return (
    <Card className="mt-4">
      <Card.Img variant="top" src={props.productItem.productImageUrl} />
      <Card.Body>
        <Card.Title>
          {props.productItem.productName} - ${props.productItem.productPrice}
        </Card.Title>
        <Card.Text>{props.productItem.productDescription}</Card.Text>
        <Row>
          <Col md={9} xs={12}> {parseInt(props.productItem.availableQuantity) >0 ? <Button onClick={onAddToCartClick} variant="primary">Add to Cart</Button> : 'Out of Stock' }
          </Col>
          <Col md={3} xs={12}>
            <Form.Control
              size="sm"
              type="text"
              value={quantity}
              onChange = {(event)=> setQuantity(event.target.value)}
            />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ProductList;
