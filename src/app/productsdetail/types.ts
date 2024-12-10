export interface ProductCardProps {
    title: string;
    department: string;
    price: {
      original: number;
      discounted: number;
    };
    imageUrl: string;
  }
  
  export interface BrandLogoProps {
    imageUrl: string;
    alt: string;
    width: string;
  }
  
  export interface NavigationLinkProps {
    label: string;
    isActive?: boolean;
  }
  
  export interface FooterLinkGroupProps {
    title: string;
    links: string[];
  }