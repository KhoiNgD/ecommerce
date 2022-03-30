export interface IProductInclude {
  quantity: number;
  item: string;
}

export interface IProductImageType {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface IProductOthers {
  slug: string;
  name: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

export interface IProduct {
  id: number;
  slug: string;
  name: string;
  image: IProductImageType;
  category: string;
  categoryImage: IProductImageType;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: IProductInclude[];
  gallery: {
    first: IProductImageType;
    second: IProductImageType;
    third: IProductImageType;
  };
  others: IProductOthers[];
}
