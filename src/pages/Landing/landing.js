import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

function Landing() {
  return (
    <Container>
      <p className="text-5xl font-bold mb-4 text-red-400">Landing</p>
      <p className="text-2xl mb-2 text-amber-300">Routes</p>
      <Link className="text-amber-400" to="oslist">OsListPage</Link>
    </Container>
  );
}

export default Landing;
