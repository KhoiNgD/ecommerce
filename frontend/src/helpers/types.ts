export interface ProductInclude {
  quantity: number;
  item: string;
}

export interface ProductImageType {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface ProductOthers {
  slug: string;
  name: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  image: ProductImageType;
  category: string;
  categoryImage: ProductImageType;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: ProductInclude[];
  gallery: {
    first: ProductImageType;
    second: ProductImageType;
    third: ProductImageType;
  };
  others: ProductOthers[];
}
