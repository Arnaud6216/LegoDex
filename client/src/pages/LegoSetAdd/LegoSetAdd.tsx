import "./LegoSetAdd.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../services/Context";

function LegoSetAdd() {
  const context = useContext(Context);

  if (!context) {
    throw new Error("LegoSetAdd must be used within a Provider");
  }

  const { actualCategoryId, setLegoSets } = context;
  const navigate = useNavigate();

  return (
    <>
      <main className="form-container">
        <form
          className="legoset-form"
          onSubmit={(e) => {
            e.preventDefault();

            const form = e.target as HTMLFormElement;

            const legoSetData = {
              name: (form.elements.namedItem("name") as HTMLInputElement).value,
              number: (form.elements.namedItem("number") as HTMLInputElement)
                .value,
              number_of_pieces: (
                form.elements.namedItem("number_of_pieces") as HTMLInputElement
              ).value,
              description: (
                form.elements.namedItem("description") as HTMLInputElement
              ).value,
              img_src: (form.elements.namedItem("img_src") as HTMLInputElement)
                .value,
              category_id: actualCategoryId,
            };

            fetch(`${import.meta.env.VITE_API_URL}/api/legoset/add`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(legoSetData),
            })
              .then((response) => response.json())
              .then(() => {
                fetch(
                  `${
                    import.meta.env.VITE_API_URL
                  }/api/legoset/${actualCategoryId}`,
                )
                  .then((response) => response.json())
                  .then((data) => {
                    setLegoSets(data);
                    navigate(`/legoset/${actualCategoryId}`);
                  });
              })
              .catch((error) => {
                console.error("Erreur lors de l'ajout du set", error);
              });
          }}
        >
          <h1 className="add-title">Ajouter un set</h1>

          <label className="name-label" htmlFor="name">
            Nom du set
          </label>
          <input id="name" type="text" />

          <label className="number-label" htmlFor="number">
            N° du set
          </label>
          <input id="number" type="text" />

          <label className="piece-label" htmlFor="number_of_pieces">
            Nombre de pièces
          </label>
          <input id="number_of_pieces" type="text" />

          <label className="description-label" htmlFor="description">
            Description
          </label>
          <input id="description" type="text" />

          <label className="img-label" htmlFor="img_src">
            Lien de l'image
          </label>
          <input id="img_src" type="text" />

          <div className="button-container">
            <button className="form-button-ok" type="submit">
              Valider
            </button>
            <button
              className="form-button-cancel"
              type="button"
              onClick={() => navigate(`/legoset/${actualCategoryId}`)}
            >
              Annuler
            </button>
          </div>
        </form>
      </main>
    </>
  );
}

export default LegoSetAdd;
