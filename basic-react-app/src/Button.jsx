function printHello() {
  console.log("Hello!");
}

function handleMouseOver() {
  console.log("Bye");
}

function handleDBlClick() {
  console.log("you did dpuble click!");
}

export default function Button() {
  return (
    <div>
      <button onClick={printHello}>Click me!</button>
      <p onMouseOver={handleMouseOver}>
        this is for demo. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Perferendis cupiditate recusandae porro, velit, saepe at beatae
        nihil debitis harum provident reprehenderit repudiandae dolore nobis quo
        fuga placeat error sunt? Expedita!
      </p>
      <button onDoubleClick={handleDBlClick}>DBl clicks!</button>
    </div>
  );
}
