import React from 'react';

const Header = () => {
  function changeText() {
    let x = 5;
    document.getElementById("result").innerText = `square of ${x} is ${x * x}`;
  }

  return (
    <>
    <div>
      <h1>Hii!</h1>
      <h2>BUri Buri Zimon</h2>
    </div>
    <div>
      <h2>Ajay hero</h2>
    </div>
      <button onClick={changeText}>Click me</button>
    </>


  );
};

export default Header;


