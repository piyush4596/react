import "./Product.css";

function Product({ title, price, features, features2 }) {
  let isDiscount = price > 30000;
  let styles = { backgroundColor: isDiscount ? "yellow" : "" };
  return (
    <div className="Product" style={styles}>
      <h3>{title}</h3>
      <h5>price: {price}</h5>
      {isDiscount && <p>"Discount 5%"</p>}
      {/* {price > 30000 ? <p>"Discount 5%"</p> : null} */}

      {/* <p> 
        {features.map((feature) => (
          <li>{feature}</li>
        ))}
      </p> */}

      {/* <p>{features}</p> */}
      {/* <p>{features2.a}</p> */}
    </div>
  );
}

export default Product;
