import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  )
}