export interface IGood {
  id: number;
  name: string;
  price: number;
  img: string;
}

const goods: IGood[] = [
  { id: 1, name: "Sword", price: 10, img: "./assets/sword.png" },
  { id: 2, name: "Dagger", price: 40, img: "./assets/dagger.png" },
  { id: 3, name: "Platemail", price: 60, img: "./assets/fantasy.png" },
  { id: 4, name: "Staff", price: 75, img: "./assets/staff.png" },
  { id: 5, name: "Wand", price: 50, img: "./assets/magic-wand.png" },
  { id: 6, name: "Elixir", price: 60, img: "./assets/elixir.png" },
  { id: 7, name: "Potion", price: 60, img: "./assets/potion.png" },
  { id: 8, name: "Magic Scroll", price: 60, img: "./assets/scrolls.png" },
  { id: 9, name: "Buckler", price: 60, img: "./assets/buckler.png" },
  { id: 10, name: "Tower Shield", price: 60, img: "./assets/shield.png" },
];
export default goods;
