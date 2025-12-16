import { createContext, useState } from "react";
import goods from "../data/InitialData";
import type { IGood } from "../data/InitialData";

export const ShopInventoryContext= createContext<IGood[]>([])

export function useShopInventory() {
  const [shopInventory, setShopInventory] = useState<IGood[]>(goods);
  const [yourInventory, setYourInventory] = useState<IGood[]>([]);

  function handleBuy(item: IGood) {
    setShopInventory((prev) =>
      prev.filter((shopItem) => shopItem.id !== item.id)
    );
    setYourInventory((prev) => [...prev, item]);
    console.log(yourInventory)
  }
  function handleSell(item: IGood) {
    setYourInventory((prev) =>
      prev.filter((invItem) => invItem.id !== item.id)
    );
    setShopInventory((prev) => [...prev, item]);
  }

  return {
    shopInventory,
    yourInventory,
    handleBuy,
    handleSell,
  };
}
