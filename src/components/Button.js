import React from "react";
import { Link } from 'react-router-dom';

const Button = ({ toLink, buttonText }) => (
    <Link to={toLink}>
      <button className="btn btn-sm btn-primary">{buttonText}</button>
    </Link>
);

export default Button;