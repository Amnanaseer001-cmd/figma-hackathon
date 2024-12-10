export interface CategoryCardProps {
    title: string;
    itemCount: number;
    imageUrl: string;
  }
  
  export interface ProductCardProps {
    title: string;
    department: string;
    originalPrice: string;
    salePrice: string;
    imageUrl: string;
    colors: string[];
  }
  
  export interface BrandLogoProps {
    imageUrl: string;
    width: string;
    aspectRatio: string;
  }
  export const products = [
    {
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
      imageUrl: "0.png",
    },
    {
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
      imageUrl: "22.png",
    },
    // Remaining 6 products with same structure but different image URLs
    {
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d974f98b064666f6276edc2cfcf92b8cb05610571648cb98d8c99bf5572ad263?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
    },
    {
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0def10d48969712d261ede30072182971c134c33e9be5f8a21edb3eb924509eb?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
    },
    {
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5fab8f8a3a286dc1205b6e1e6a8fbddfa47c6ec79dbe2a210fda059a54fbf95b?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
    },
    {
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6cb6b05a8111c54c0934030c902d3e25b16ff042bc1cec28666c9f4c44ea9c51?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
    },
    {
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/739b8ac8cdc28306e5ac74b4054aa8703897614bb6038c9220343f1dad2d2b1d?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
    },
    {
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8b88b45cd69129cf983750e64af3a1d3ebcfd4405eaf3116cdadd4ff757384c2?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
    },
    {
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5fab8f8a3a286dc1205b6e1e6a8fbddfa47c6ec79dbe2a210fda059a54fbf95b?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
    },
    {
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6cb6b05a8111c54c0934030c902d3e25b16ff042bc1cec28666c9f4c44ea9c51?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
    },
    {
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/739b8ac8cdc28306e5ac74b4054aa8703897614bb6038c9220343f1dad2d2b1d?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
    },
    {
      title: "Graphic Design",
      department: "English Department",
      oldPrice: "$16.48",
      newPrice: "$6.48",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8b88b45cd69129cf983750e64af3a1d3ebcfd4405eaf3116cdadd4ff757384c2?placeholderIfAbsent=true&apiKey=937eb4dfb3744d4c98aa824f13bf278c",
    },
  ];