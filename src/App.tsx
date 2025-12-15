import { useState } from "react";
import "./App.css";
// import goods from "./data/InitialData";
// import type {IGood} from "./data/InitialData";
import ShopItem from "./components/ShopItem";
import { useShopInventory } from "./hooks/useShopInventory";

function App() {
  // const [count, setCount] = useState(0)
  const [mode, setMode] = useState("Buy");
  const { shopInventory, yourInventory, handleBuy, handleSell } =
    useShopInventory();

  return (
    <>
      <div className="shopHeader">
        <div className="talkBubble">
          <h2>Hello Adventurer! Welcome to my shop!</h2>
        </div>
        <img
          src="./assets/Tilly.jpg"
          className="shopKeeperImg"
          alt="Shop keeper Tilly"
        />
      </div>
      <div className="shopMenu">
        <button className="menuButton" onClick={() => setMode("Buy")}>
          Buy
        </button>
        <button className="menuButton" onClick={() => setMode("Sell")}>
          Sell
        </button>
        <button className="menuButton" onClick={() => setMode("Chat")}>
          Chat
        </button>
      </div>
      <div className="shopContainer">
        {mode === "Buy" && (
          <>
            <div className="shopLabel">
              <h3 className="shopHeadline">Buy</h3>
            </div>
            <div className="shopInventory">
              {shopInventory.map((item) => (
                <ShopItem
                  key={item.id}
                  item={item}
                  onClick={handleBuy}
                  buttonText="Buy"
                />
              ))}
            </div>
          </>
        )}
        {mode === "Sell" && (
          <>
            <div className="shopLabel">
              <h3 className="shopHeadline">Sell</h3>
            </div>
            <div className="yourInventory">
              {yourInventory.map((item) => (
                <ShopItem
                  key={item.id}
                  item={item}
                  onClick={handleSell}
                  buttonText="Sell"
                />
              ))}
            </div>
          </>
        )}
        {mode === "Chat" && (
          <div className="chatPage">
            <h3 className="shopHeadline">What would you like to know?</h3>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
