import { useEffect, useState } from "react";
import { Container, Button, Card } from "react-bootstrap";

const CardProduc = () => {
  const url = "https://fakestoreapi.com/products";

  const [produks, setProduks] = useState([]);

  const getDataProduks = async () => {
    const response = await fetch(url);
    const dataProduk = await response.json();
    setProduks(dataProduk);
    console.log(produks);
  };

  useEffect(() => {
    getDataProduks();
  }, []);

  return (
    <Container>
      <h1>My Produk</h1>
      {produks.map((produk) => (
        <Kartu
          key={produk.id}
          title={produk.title}
          price={produk.price}
          image={produk.image}
        />
      ))}
    </Container>
  );
};

function Kartu(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.image} style={{ width: "20%" }} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>$ {props.price}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardProduc;
