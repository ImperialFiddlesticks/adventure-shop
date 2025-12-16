import { Link, createFileRoute } from '@tanstack/react-router'
import ShopItem from "../components/ShopItem";
import type { IGood } from '../data/InitialData';
import { useShopInventory } from '../libs/contexts';

export const Route = createFileRoute('/')({
  component: BuyPage,
})

function BuyPage() {
 const shop = useShopInventory()
//   const { shopInventory, handleBuy } =
//     Route.useRouteContext();



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
    
            <Link to="/buy" className="menuButton" >Buy</Link>
            <Link to="/sell" className="menuButton">Sell</Link>
            <Link to="/chat" className="menuButton" >Chat</Link>
            
          </div>
      
          </>
        
          
        
     
  );

}
