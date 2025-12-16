import { createFileRoute } from '@tanstack/react-router'
import type { IGood } from '../../data/InitialData'
import ShopItem from '../../components/ShopItem'
import { useShopInventory } from '../../libs/contexts'
export const Route = createFileRoute('/buy/')({
  component: RouteComponent,
})

function RouteComponent() {
  const shop = useShopInventory()
  return (<div className="shopContainer">
          
            <div className="shopLabel">
              <h3 className="shopHeadline">Shop</h3>
              <img src="./assets/money.png" className="moneyIcon" />
            </div>
            <div className="shopInventory">
              {shop.shopInventory.map((item:IGood) => (
                <ShopItem
                  key={item.id}
                  item={item}
                  onClick={shop.handleBuy}
                  buttonText="Buy"
                /> 
               ))}
            </div></div>)
}
