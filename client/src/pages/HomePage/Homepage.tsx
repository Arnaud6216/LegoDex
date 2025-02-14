import { useContext } from "react";
import Category from "../../components/Category/Category";
import { Context } from "../../services/Context";
import "./HomePage.css";

function HomePage() {
  const context = useContext(Context);

  if (!context) {
    throw new Error("HomePage must be used within a Provider");
  }

  const { categories } = context;

  return (
    <>
      <main className="main-container">
        <img className="logo-img" src="./public/logo.png" alt="LegoDex Logo" />
        <h1 className="homepage-title">Le Pokédex des sets Lego !</h1>
        <h2 className="homepage-text">Choisis ton univers préféré :</h2>
        <section className="category-container">
          {categories.length > 0 ? (
            categories.map((category) => (
              <Category key={category.name} category={category} />
            ))
          ) : (
            <p>Chargement des catégories...</p>
          )}
        </section>
      </main>
    </>
  );
}

export default HomePage;
