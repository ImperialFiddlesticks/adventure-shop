import type { IGood } from "../data/InitialData"

export type ShopContext = {
  shopInventory: IGood[]
  yourInventory: IGood[]
  handleBuy: (item: IGood) => void
  handleSell: (item: IGood) => void
}