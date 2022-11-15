import React from 'react';

function BoxColor({ r, g, b }) {
  console.log({ r, g, b });
  const divStyle = {
    backgroundColor: 'rgb(' + r + ',' + g + ',' + b + ')',
  };
  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? '0' + hex : hex;
  }
  console.log(divStyle);
  return (
    <div style={divStyle}>
      <h1>
        rgb({r},{g},{b})
      </h1>
      <h1>
        #{componentToHex(r)}
        {componentToHex(g)}
        {componentToHex(b)}
      </h1>
    </div>
  );
}

export default BoxColor;
