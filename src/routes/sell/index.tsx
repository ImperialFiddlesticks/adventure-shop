import { Link, createFileRoute } from "@tanstack/react-router";
import { useContext, useEffect, useState } from "react";
import { ShopInventoryContext, useShopInventory } from "../../libs/contexts";
import ShopItem from "../../components/ShopItem";
import type { IGood } from "../../data/InitialData";

export const Route = createFileRoute("/sell/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { shopInventory, yourInventory } = useContext(ShopInventoryContext);
  const [shopInventoryState, setShopInventoryState] = shopInventory;
  const [yourInventoryState, setYourInventoryState] = shopInventory;
  //  const { shopInventory, yourInventory, handleBuy, handleSell } =
  // useShopInventory();

  useEffect(() => {
    console.log(yourInventoryState);
  }, [yourInventoryState]);

  function handleSell(item: IGood) {
    setYourInventoryState((prev) =>
      prev.filter((invItem) => {
        console.log({ invItem, item });
        return invItem.id !== item.id;
      })
    );
    setShopInventoryState((prev) => [...prev, item]);
  }

  return (
    <>
      <div className="shopLabel">
        <h3 className="shopHeadline">Sell</h3>
        <img src="./assets/back-pack.png" className="moneyIcon" />
      </div>
      <div className="yourInventory">
        {yourInventoryState.map((item) => (
          <ShopItem
            key={item.id}
            item={item}
            onClick={() => handleSell(item)}
            buttonText="Sell"
          />
        ))}
      </div>
    </>
  );
}
