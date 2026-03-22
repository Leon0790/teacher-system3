import React from 'react';

function Card({ title, children }) {
  return (
    <div className="card">
      <h4>{title}</h4>
      {children}
    </div>
  );
}

export default Card;
