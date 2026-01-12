import { createRoot } from "react-dom/client";
import { useState } from "react";
import { CartContext } from "./contexts";
import Order from "./Order";
import PizzaOfTheDay from "./PizzaOfTheDay";
import Header from "./Header";

const App = () => {
  const cartHook = useState([]);

  return (
    <CartContext.Provider value={cartHook}>
      <div className="mainContainer">
        <Header></Header>
        <Order></Order>
        <PizzaOfTheDay></PizzaOfTheDay>
      </div>
    </CartContext.Provider>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
