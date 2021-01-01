import React from 'react';
import './style.css';

export default function Card({title, children}) {
  return (
    <div className="card">
      <div className="title"> {title} </div>
      <div className="content"> {children} </div>
    </div>
  );  
}