import React from 'react';

function Random({ min, max }) {
  let number = Math.floor(Math.random() * (max - min + 1) + min);
  return (
    <div>
      <h1>
        Random value between {min} and {max}={number}
      </h1>
    </div>
  );
}

export default Random;
