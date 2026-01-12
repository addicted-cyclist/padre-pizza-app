import { useState, useEffect } from "react";
import Pizza from "./Pizza";
import currencySign from "./utils/currencySign";

export default function Order() {
  const [pizzaType, setPizzaType] = useState("pepperoni");
  const [pizzaSize, setPizzaSize] = useState("M");
  const [pizzaTypes, setPizzaTypes] = useState([]);
  const [loading, setLoading] = useState(true);

  let price, selectedPizza;
  if (!loading) {
    selectedPizza = pizzaTypes.find((pizza) => pizzaType === pizza.id);
    console.log("\nselectedPizza:", selectedPizza);
    price = currencySign("en-US", "USD").format(
      selectedPizza.sizes ? selectedPizza.sizes[pizzaSize] : "",
    );
  }

  useEffect(() => {
    fetchPizzaTypes();
  }, []);

  async function fetchPizzaTypes() {
    const pizzasRes = await fetch("/api/pizzas");
    const pizzasJson = await pizzasRes.json();
    setPizzaTypes(pizzasJson);
    setLoading(false);
  }

  return (
    <div className="order">
      <h2>Create Order</h2>
      <form>
        <div>
          <div>
            <label htmlFor="pizza-type">Pizza Type</label>
            <select
              name="pizza-type"
              value={pizzaType}
              onChange={(e) => setPizzaType(e.target.value)}
            >
              {pizzaTypes.map((pizza) => (
                <option key={pizza.id} value={pizza.id}>
                  {pizza.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="pizza-size">Pizza Size</label>
            <div className="sizes-container">
              <div>
                <span>
                  <input
                    checked={pizzaSize === "S"}
                    type="radio"
                    name="pizza-size"
                    value="S"
                    id="pizza-s"
                    onChange={(e) => setPizzaSize(e.target.value)}
                  />
                  <label htmlFor="pizza-s">Small</label>
                </span>
              </div>
              <div>
                <span>
                  <input
                    checked={pizzaSize === "M"}
                    type="radio"
                    name="pizza-size"
                    value="M"
                    id="pizza-m"
                    onChange={(e) => setPizzaSize(e.target.value)}
                  />
                  <label htmlFor="pizza-m">Medium</label>
                </span>
              </div>
              <div>
                <span>
                  <input
                    checked={pizzaSize === "L"}
                    type="radio"
                    name="pizza-size"
                    value="L"
                    id="pizza-l"
                    onChange={(e) => setPizzaSize(e.target.value)}
                  />
                  <label htmlFor="pizza-l">Large</label>
                </span>
              </div>
            </div>
          </div>
          <button type="submit">Add to Cart</button>
        </div>
        {loading ? (
          <p>loading pizzas...</p>
        ) : (
          <div className="order-pizza">
            <Pizza
              name={selectedPizza.name}
              description={selectedPizza.description}
              image={selectedPizza.image}
            ></Pizza>
            <p>{price}</p>
          </div>
        )}
      </form>
    </div>
  );
}
