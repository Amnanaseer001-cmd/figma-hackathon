export interface PricingFeature {
  icon: string;
  text: string;
}

export interface PricingPlan {
  title: string;
  description: string;
  price: string;
  features: PricingFeature[];
  buttonText: string;
  isPopular?: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface SocialLink {
  icon: string;
  url: string;
  alt: string;
}

export interface FooterLink {
  text: string;
  url: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}
