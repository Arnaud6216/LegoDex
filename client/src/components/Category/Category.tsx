import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { CategoryProps } from "../../types/vite-env";
import "./Category.css";

interface CategoryComponentProps {
  category: CategoryProps;
}

const Category = ({ category }: CategoryComponentProps) => {
  const navigate = useNavigate();

  const handleClickCategory = () => {
    navigate(`/legoset/${category.id}`);
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      style={{
        backgroundImage: `url(${isHovered ? category.img_src : ""})`,
        backgroundSize: "cover",
        transition: "background-image 0.3s ease-in-out",
      }}
      className="category-card"
      onClick={handleClickCategory}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleClickCategory();
        }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="card-name">{category.name}</h2>
      <p className="card-text">{category.description}</p>
    </article>
  );
};

export default Category;
