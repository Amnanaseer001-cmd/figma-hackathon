export interface ProductCardProps {
  title: string;
  department: string;
  oldPrice: string;
  newPrice: string;
  imageUrl: string;
}

export interface FeaturedPostProps {
  image: string;
  date: string;
  comments: number;
  title: string;
  description: string;
}

export interface CategoryCardProps {
  image: string;
  category: string;
}
