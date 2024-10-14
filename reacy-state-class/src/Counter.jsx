import { useState } from "react";

export default function Counter() {
  //   let [stateVartiable, useStateVariable] = useState(0);
  let [count, setCount] = useState(0);

  let innCount = () => {
    setCount(count + 1);
    // console.log(count);
  };

  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={innCount}>increase number</button>
    </div>
  );
}
