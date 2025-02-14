import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Context } from "../../services/Context";
import "./Navbar.css";

function Navbar() {
  const { id } = useParams<{ id: string }>();
  const context = useContext(Context);

  if (!context) {
    throw new Error("HomePage must be used within a Provider");
  }

  const { categories } = context;

  const navigate = useNavigate();

  const handleBackToCategory = () => {
    navigate("/");
  };

  return (
    <>
      <section className="navbar-container">
        <img className="logo-img" src="/public/logo.png" alt="" />
        <h1 className="nav-category-name">
          {id
            ? categories[Number.parseInt(id) - 1]?.name
            : "Category not found"}
        </h1>
        <button
          className="nav-button"
          type="button"
          onClick={handleBackToCategory}
        >
          Retour aux catégories
        </button>
      </section>
    </>
  );
}

export default Navbar;
