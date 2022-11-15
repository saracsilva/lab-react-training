import React from 'react';
import './IdCard.css';

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div className="cards">
      <img src={picture} alt="picture" />
      <div className="information">
        <p>
          <b> First Name: </b>
          {firstName}
        </p>
        <p>
          <b> Last Name: </b>
          {lastName}
        </p>
        <p>
          <b> Gender: </b>
          {gender}
        </p>
        <p>
          <b> Birth: </b>
          {birth.toDateString()}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
