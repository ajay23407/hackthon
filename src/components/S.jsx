import React from 'react';

const S = () => {
  function changeText() {
    let x = 5;
    document.getElementById("result").innerText = `square of ${x} is ${x * x}`;
  }

  return (
    <>
     
      <div>
        shudhansh chinar
      </div>
      <button onClick={changeText}>Click me</button>
    </>
  );
};

export default S;
