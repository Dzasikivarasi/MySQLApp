export type ProductBaseData = {
  id: string;
  title: string;
  description: string;
  price: number;
  comments?: ProductComments[];
  thumbnail?: ProductImages;
  images?: ProductImages[];
}

export type ProductImages = {
  id: string;
  productId: string;
  main: boolean;
  url: string;
}

export type ProductComments = {
  id: string;
  productId: string;
  name: string;
  email: string;
  body: string;
}
