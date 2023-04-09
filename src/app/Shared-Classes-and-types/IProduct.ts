import { DiscountOffers } from "./DiscountOffers-Enum";

export interface IProduct{
  ID:number;
  Name:string;
  Quantity:number;
  Price:number;
  Image:string;
  Discount: DiscountOffers
	IsDiscount:boolean
}
