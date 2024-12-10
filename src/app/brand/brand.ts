export interface TeamMemberProps {
    imageSrc: string;
    name: string;
    profession: string;
    socialIcons: {
      src: string;
      alt: string;
    }[];
  }
  
  export interface StatisticProps {
    value: string;
    label: string;
  }
  
  export interface CompanyLogoProps {
    src: string;
    alt: string;
    width: string;
    aspectRatio: string;
  }