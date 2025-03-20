import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useParams } from "react-router-dom";

const AllergenDetails = () => {
  const { id } = useParams();
  const { allergen, loading, error, fetchAllergenById } =
    useContext(GlobalContext);

  useEffect(() => {
    fetchAllergenById(id);
  }, [fetchAllergenById, id]);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="flex flex-col items-center">
      {loading && <p>Caricamento...</p>}
      {error && <p>Errore: {error.message}</p>}
      {allergen && (
        <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold">{allergen.nome}</h1>
          <p>Questa categoria include:</p>
          {allergen.elenco_puntato && (
            <ul className="list-disc list-inside mb-4">
              {allergen.elenco_puntato.split("\n").map((item, index) => (
                <li key={index} className="text-lg">
                  {capitalizeFirstLetter(item.replace(/^- /, ""))}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default AllergenDetails;
