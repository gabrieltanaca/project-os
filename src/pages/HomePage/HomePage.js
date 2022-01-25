import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

function HomePage() {
  return (
    <Container>
      <p className="text-5xl font-bold mb-4 text-red-400">Home</p>
      <p className="text-2xl mb-2 text-amber-300">Routes</p>
      <Link className="text-amber-400" to="dashboard">Dashboard</Link>
      <Link className="text-amber-400" to="listos">List Order Of Service</Link>
      <Link className="text-amber-400" to="aboutus">About Us</Link>
      <Link className="text-amber-400" to="contact">Contact</Link>
    </Container>
  );
}

export default HomePage;
