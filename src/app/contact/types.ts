export interface SocialIconProps {
    src: string;
    alt: string;
  }
  
  export interface ContactCardProps {
    email1: string;
    email2: string;
    icon: string;
    isDark?: boolean;
  }
  
  export interface NavigationItemProps {
    label: string;
    width: string;
  }
  
  export interface FooterLinkGroupProps {
    title: string;
    links: string[];
  }