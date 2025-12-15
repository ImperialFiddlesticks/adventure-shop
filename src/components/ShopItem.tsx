import type { IGood } from "../data/InitialData";

interface IShopItem {
  item: IGood;
  onClick?: (item: IGood) => void;
  buttonText?: string;
}
const ShopItem = ({ item, onClick, buttonText }: IShopItem) => {
  return (
    <div className="shopLine">
      <img src={item.img} className="shopIcons" />
      <p className="itemName">{item.name}</p>
      <p className="itemPrice">
        Price: {item.price}{" "}
        <img src="./assets/singlecoin.png" className="goldIcon" />
      </p>

      {onClick && buttonText && (
        <button className="buyButton" onClick={() => onClick(item)}>
          {buttonText}
        </button>
      )}
    </div>
  );
};
export default ShopItem;
