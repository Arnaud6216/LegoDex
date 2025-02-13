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

  return (
    <article
      className="category-card"
      onClick={handleClickCategory}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleClickCategory();
        }
      }}
    >
      <h2 className="card-name">{category.name}</h2>
      <p className="card-text">{category.description}</p>
    </article>
  );
};

export default Category;
