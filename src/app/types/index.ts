export interface Price {
  currencyCode: string;
  amount: number;
}

export interface Product {
  name: string;
  description: string;
  image?: string;
  imageSrc?: string;
  tag?: string;
  wasPrice?: {
    cashPrice: Price;
    pointsPrice: {
      amount: number;
    };
  };
  currentPrice: {
    cashPrice: Price;
    pointsPrice: {
      amount: number;
    };
  };
}
