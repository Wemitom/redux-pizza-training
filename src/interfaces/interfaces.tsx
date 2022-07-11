export {};

export interface ItemInterface {
  _id: string;
  title: string;
  description: string;
  code: string;
  img: any;
  type: 'promo' | 'product';
  price?: number;
}

export interface ShoppingCartState {
  items:
    | {
        item: ItemInterface;
        count: number;
      }[];
}
