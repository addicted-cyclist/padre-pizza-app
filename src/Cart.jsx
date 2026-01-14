import currencySign from "./utils/currencySign";

export default function Cart({ cart, checkout }) {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const currentGood = cart[i];
    console.log(typeof currentGood.pizzaPrice);
    total += currentGood.pizzaPrice;
    console.log("\ntotal:", total);
  }

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <span className="name">{item.pizzaName} : </span>
            <span className="size">{item.pizzaSize} : </span>
            <span className="price">{item.pizzaPrice}</span>
          </li>
        ))}
      </ul>
      <p>Total: {currencySign("en-US", "USD").format(total)}</p>
      <button onClick={checkout}>Checkout</button>
    </div>
  );
}
