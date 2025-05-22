// src/components/CardCarousel.jsx
import React from "react";
import { Carousel, Card } from "react-bootstrap";
import LazyImage from "./LazyImage";

const CardCarousel = React.memo(({ items }) => (
  <Carousel className="custom-carousel">
    {items.map((item, idx) => (
      <Carousel.Item key={idx}>
        <div className="d-flex justify-content-center align-items-center">
          <Card className="custom-card">
            <LazyImage
              src={`https://starwars-visualguide.com/assets/img/characters/${item.id}.jpg`}
              alt={`Image of ${item.name}`}
            />
            <Card.Body className="text-center">
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>Height: {item.height} cm</Card.Text>
              <a href="#" className="btn btn-primary">Learn More</a>
            </Card.Body>
          </Card>
        </div>
      </Carousel.Item>
    ))}
  </Carousel>
));

export default CardCarousel;
