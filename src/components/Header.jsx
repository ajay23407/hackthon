import React from 'react';
import './Header.css';
const Header = () => {
  // function changeText() {
  //   let x = 5;
  //   document.getElementById("result").innerText = `square of ${x} is ${x * x}`;
  // }
  let url="https://jsonplaceholder.typicode.com/users";
  fetch(url)
    .then(response => response.json())
    .then(result => {
      console.log(result);
      console.table(result);
      
      let output=""
      for(let i=0; i<result.length; i++){
        output += `<tr>
          <td>${result[i].id}</td>
          <td>${result[i].name}</td>
          <td>${result[i].email}</td>
        </tr>`;
      }
      
      document.getElementById("table").innerHTML = output;
    })

  return (
    <>
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody id ="table"></tbody>
      </table>
      {/* <div id="result">I am from dev</div>
      <button onClick={changeText}>Click me</button> */}

    </>
  );
};

export default Header
