// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import CardCarousel from "../components/CardCarousel";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCharacters = async () => {
    try {
      const res = await fetch("https://swapi.dev/api/people/");
      const data = await res.json();
      const formatted = data.results.map((char) => {
        const id = char.url.match(/\/people\/(\d+)\//)[1];
        return { ...char, id };
      });
      console.log("🔥 Characters loaded:", formatted);
      setCharacters(formatted);
    } catch (err) {
      console.error("Error fetching characters:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  const rows = chunkArray(characters, 3);

  return (
    <div className="text-center mt-5">
      <Container>
        {rows.map((group, idx) => (
          <Row key={idx} className="mb-4">
            {group.map((char, i) => (
              <Col key={i}>
                <CardCarousel items={[char]} />
              </Col>
            ))}
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default Home;
