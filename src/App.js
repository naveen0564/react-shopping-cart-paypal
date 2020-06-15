import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavbarComponent from "./components/navbar";
import ProductList from "./components/ProductList";
import { Col, Row, Container } from "react-bootstrap";

function App() {
  const [productList, updateProductList] = useState([
    {
      availableQuantity: "1",
      productImageUrl: "https://via.placeholder.com/150x150.png?text=IPhone",
      productPrice: "1000",
      productName: "IPhone XS",
      productDescription: "This is IPhone XS",
      id: 1,
      quantity: "1",
    },
    {
      availableQuantity: "1",
      productImageUrl: "https://via.placeholder.com/150x150.png?text=IPhone SE",
      productPrice: "900",
      productName: "IPhone XE",
      productDescription: "IPhone XE with good look",
      id: 2,
      quantity: "1",
    },
    {
      availableQuantity: "1",
      productImageUrl: "https://via.placeholder.com/150x150.png?text=IPhone 7",
      productPrice: "1099",
      productName: "IPhone 7",
      productDescription: "This is IPhone 7",
      id: 3,
      quantity: "1",
    },
    {
      availableQuantity: "1",
      productImageUrl:
        "https://via.placeholder.com/150x150.png?text=IPhone 8 SE",
      productPrice: "1000",
      productName: "IPhone XS",
      productDescription: "This is IPhone XS",
      id: 1,
      quantity: "1",
    },
    {
      availableQuantity: "1",
      productImageUrl:
        "https://via.placeholder.com/150x150.png?text=IPhone X Pro Max",
      productPrice: "900",
      productName: "IPhone XE",
      productDescription: "IPhone XE with good look",
      id: 2,
      quantity: "1",
    },
    {
      availableQuantity: "1",
      productImageUrl: "https://via.placeholder.com/150x150.png?text=IPhone",
      productPrice: "1099",
      productName: "IPhone 7",
      productDescription: "This is IPhone 7",
      id: 3,
      quantity: "1",
    },   {
      availableQuantity: "1",
      productImageUrl:
        "https://via.placeholder.com/150x150.png?text=IPhone 8 SE",
      productPrice: "1000",
      productName: "IPhone XS",
      productDescription: "This is IPhone XS",
      id: 1,
      quantity: "1",
    },
    {
      availableQuantity: "1",
      productImageUrl:
        "https://via.placeholder.com/150x150.png?text=IPhone X Pro Max",
      productPrice: "900",
      productName: "IPhone XE",
      productDescription: "IPhone XE with good look",
      id: 2,
      quantity: "1",
    },
    {
      availableQuantity: "1",
      productImageUrl: "https://via.placeholder.com/150x150.png?text=IPhone",
      productPrice: "1099",
      productName: "IPhone 7",
      productDescription: "This is IPhone 7",
      id: 3,
      quantity: "1",
    }
  ]);
  return (
    <Container>
      <Row>
        <Col>
          <NavbarComponent />
        </Col>
      </Row>
      <Row>
        {productList.map((product, index) => {
          return (
            <Col xs={12} md={4}>
              <ProductList key={index} productItem={product} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default App;
