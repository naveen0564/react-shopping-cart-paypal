import React from "react";
import { ListGroup, Row, Col, Button } from "react-bootstrap";
import PaypalButton from "./PaypalButton";
const Cart = () => {
  const cartList = JSON.parse(localStorage.getItem("cartList"));
  const totalPrice = cartList
    .map((e) => parseInt(e.productPrice) * parseInt(e.quantity))
    .reduce((a, b) => a + b, 0);
  return (
    <React.Fragment>
      <ListGroup>
        {cartList.map((item, index) => {
          return (
            <ListGroup.Item key={index}>
              {" "}
              Product Name : {item.productName} <br></br> Quantity :{" "}
              {item.quantity} Price: ${" "}
              {parseInt(item.quantity) * parseInt(item.productPrice)}{" "}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
      <Row>
        <Col className="text-right my-3">Total Price : {totalPrice}</Col>
      </Row>
      <Row>
        <Col className="text-right my-3">
          <Button variant="success">Checkout</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <PaypalButton totalPrice={totalPrice} />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Cart;
