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
    </div>
    <div>
      <h2>Hello World</h2>
    </div>
      <button onClick={changeText}>Click me</button>
    </>
  );
};

export default Header;


