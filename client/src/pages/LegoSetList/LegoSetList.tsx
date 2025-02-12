import "./LegoSetList.css";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { Context } from "../../services/Context";
import type { LegoSetProps } from "../../types/vite-env";

function LegoSetList() {
  const context = useContext(Context);

  if (!context) {
    throw new Error("LegoSetList must be used within a Provider");
  }

  const { legoSets } = context;
  const { id } = useParams();
  const [filteredLegoSets, setFilteredLegoSets] = useState<LegoSetProps[]>([]);

  useEffect(() => {
    if (id) {
      const filtered = legoSets.filter(
        (legoSet) => legoSet.category_id === Number.parseInt(id),
      );
      setFilteredLegoSets(filtered);
    }
  }, [id, legoSets]);

  const uniqueLegoSets = Array.from(
    new Set(filteredLegoSets.map((legoSet) => legoSet.id)),
  ).map((id) => filteredLegoSets.find((legoSet) => legoSet.id === id));

  return (
    <>
      <Navbar />
      <article>
        {uniqueLegoSets.length > 0 ? (
          uniqueLegoSets.map((legoSet) => (
            <div key={legoSet?.id}>
              <h3>{legoSet?.name}</h3>
              <p>{legoSet?.description}</p>
              <img src={legoSet?.img_src} alt={legoSet?.name} />
            </div>
          ))
        ) : (
          <p>Chargement des sets LEGO...</p>
        )}
      </article>
    </>
  );
}

export default LegoSetList;
