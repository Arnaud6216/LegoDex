import "./LegoSetList.css";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { Context } from "../../services/Context";
import type { LegoSetProps } from "../../types/vite-env";

function LegoSetList() {
  const navigate = useNavigate();
  const context = useContext(Context);

  if (!context) {
    throw new Error("LegoSetList must be used within a Provider");
  }

  const { setActualCategoryId } = context;
  const { id } = useParams();

  useEffect(() => {
    setActualCategoryId(id ? Number(id) : null);
  }, [id, setActualCategoryId]);

  const [filteredLegoSets, setLegoSets] = useState<LegoSetProps[]>([]);

  useEffect(() => {
    if (id) {
      fetch(`${import.meta.env.VITE_API_URL}/api/legoset/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setLegoSets(data);
        })
        .catch((error) =>
          console.error("Erreur de récupération des legosets", error),
        );
    }
  }, [id]);

  const uniqueLegoSets = Array.from(
    new Set(filteredLegoSets.map((legoSet) => legoSet.id)),
  ).map((id) => filteredLegoSets.find((legoSet) => legoSet.id === id));

  const handleDelete = (legoSetId: number) => {
    fetch(`${import.meta.env.VITE_API_URL}/api/legoset/set/${legoSetId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setLegoSets((prevLegoSets) =>
            prevLegoSets.filter((legoSet) => legoSet.id !== legoSetId),
          );
        } else {
          console.error("Erreur lors de la suppression du set");
        }
      })
      .catch((error) => console.error("Erreur lors de la suppression", error));
  };

  const [selectedLegoSet, setSelectedLegoSet] = useState<LegoSetProps | null>(
    null,
  );

  const openPopup = (legoSet: LegoSetProps) => {
    setSelectedLegoSet(legoSet);
  };

  const closePopup = () => {
    setSelectedLegoSet(null);
  };

  return (
    <>
      <Navbar />
      <section className="legoset-container">
        {uniqueLegoSets.length > 0 ? (
          uniqueLegoSets.map((legoSet) => (
            <article className="legoset-card" key={legoSet?.id}>
              <h3 className="legoset-name">{legoSet?.name}</h3>

              <img
                className="legoset-img"
                src={legoSet?.img_src}
                alt={legoSet?.name}
              />
              <button
                className="legoset-button"
                type="button"
                onClick={() => legoSet && openPopup(legoSet)}
              >
                Plus
              </button>
              <button
                className="legoset-button-delete"
                type="button"
                onClick={() =>
                  legoSet?.id !== undefined && handleDelete(legoSet.id)
                }
              >
                Supprimer
              </button>
            </article>
          ))
        ) : (
          <p>Chargement des sets LEGO...</p>
        )}
        <article
          className="legoset-card-add"
          onClick={() => navigate("/legoset/add")}
          onKeyUp={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              navigate("/legoset/add");
            }
          }}
        >
          <h3 className="legoset-name">Ajouter un set</h3>
        </article>
      </section>
      {selectedLegoSet && (
        <div
          className="popup-overlay"
          onClick={closePopup}
          onKeyDown={closePopup}
        >
          <aside
            className="popup-content"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          >
            <h2 className="popup-name">{selectedLegoSet.name}</h2>
            <p className="popup-number">
              <strong>N°</strong> {selectedLegoSet.set_number}
            </p>
            <p className="popup-pieces">
              <strong>Nombre de pièces :</strong>{" "}
              {selectedLegoSet.number_of_pieces}
            </p>
            <p className="popup-description">{selectedLegoSet.description}</p>
            <img
              className="popup-img"
              src={selectedLegoSet.img_src}
              alt={selectedLegoSet.name}
            />
            <button type="button" onClick={closePopup}>
              Fermer
            </button>
          </aside>
        </div>
      )}
    </>
  );
}

export default LegoSetList;
