import Product from "./Product.jsx";

function ProductTab() {
  // let options = [<li> "hi-tech"</li>, <li> "durable"</li>, <li>"fast"</li>];
  let options = ["hi-tech", "durable", "fast"];
  // let options2 = { a: "hi-tech", b: "durable", c: "fast" };
  return (
    <>
      <Product
        title="phone"
        price={10000}
        // features={options}
        // features2={options2}
      />
      <Product title="laptop" price={40000} />
      <Product title="pen" price={10} />
    </>
  );
}

export default ProductTab;
