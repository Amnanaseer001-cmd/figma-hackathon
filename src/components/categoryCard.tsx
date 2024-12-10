import { CategoryCardProps } from "../app/types";

const CategoryCard: React.FC<CategoryCardProps> = ({
  image,
  category,
}) => {
  return (
    <div className="flex items-start w-full gap-2">


    
   
  <div className="flex h-[500px] w-full">
    {/* Image 1 - 500px Width */}
    <img 
      loading="lazy" 
      src={image} 
      className="h-full w-[500px] object-cover" 
      alt="First Image"
    />

    {/* Image 2 - 200px Width */}
    <img 
      loading="lazy" 
      src={image} 
      className="h-full w-[200px] object-cover" 
      alt="Second Image"
    />

    {/* Image 3 - 200px Width */}
    <img 
      loading="lazy" 
      src={image} 
      className="h-full w-[200px] object-cover" 
      alt="Third Image"
    />
  </div>
  


   </div>
  );
};
export default CategoryCard