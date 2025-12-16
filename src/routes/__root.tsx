import {
  Link,
  Outlet,
  createRootRoute,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import "../App.css";
import { ShopInventoryContext, useShopInventory } from "../libs/contexts";
import type { ShopContext } from "../types/ShopContext";
import type { IGood } from "../data/InitialData";
import { useState } from "react";
import goods from "../data/InitialData";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const shop = useShopInventory();
  const shopInventory = useState<IGood[]>(goods);
  const yourInventory = useState<IGood[]>([]);
  const store = {
    shopInventory,
    yourInventory,
  };

  return (
    <ShopInventoryContext value={store}>
      {/* <div className="shopHeader">
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

        <Link to="/" className="menuButton" >Buy</Link>
        <Link to="/sell" className="menuButton">Sell</Link>
        <Link to="/chat" className="menuButton" >Chat</Link>
        
      </div> */}

      <Outlet />
      <TanStackRouterDevtools />
    </ShopInventoryContext>
  );
}
