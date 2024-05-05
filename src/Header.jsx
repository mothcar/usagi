import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Link to="/">
        <h1>헤더입니다.</h1>
      </Link>
      <Link to="/product/001">
        <h1>product 001</h1>
      </Link>
      <Link to="/about">
        <h1>about.</h1>
      </Link>
    </div>
  );
}
