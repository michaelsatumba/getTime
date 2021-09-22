import React from "react";

// function App() {
//   const [count, setCount] = React.useState(0);
//   console.log(count);

//   function add() {
//     setCount(count + 1);
//   }

//   function minus() {
//     setCount(count - 1);
//   }

//   function multiply() {
//     setCount(count * count);
//   }

//   function divide() {
//     setCount(count / (count - count));
//   }

//   return (
//     <div className="container">
//       <h1>{count}</h1>
//       <button onClick={add}>+</button>
//       <button onClick={minus}>-</button>
//       <button onClick={multiply}>x</button>
//       <button onClick={divide}>/</button>
//     </div>
//   );
// }

function App() {
  const [time, setTime] = React.useState(0);
  console.log(time);

  let now = new Date().toLocaleTimeString();
  console.log(now);

  function getTime() {
    setTime({ now });
  }

  // setInterval(getTime, 1000);

  return (
    <div className="container">
      <h2>{now}</h2>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
