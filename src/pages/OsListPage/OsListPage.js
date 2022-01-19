import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

function OsListPage() {
  return (
    <Container>
      <h1 className="text-5xl font-bold text-blue-400 mb-4">OsListPage</h1>
      <p className="text-2xl mb-2 text-teal-300">Routes</p>
      <Link className="text-teal-400" to="/">Landing</Link>
    </Container>
  );
}

export default OsListPage;
