import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";

const AllergensList = () => {
  const { allergens, loading, error, fetchAllergens } =
    useContext(GlobalContext);

  useEffect(() => {
    fetchAllergens();
  }, [fetchAllergens]);

  const colors = [
    "bg-red-200",
    "bg-green-200",
    "bg-blue-200",
    "bg-yellow-200",
    "bg-purple-200",
    "bg-pink-200",
    "bg-indigo-200",
    "bg-gray-200",
  ];

  // Background images array
  const backgroundImages = [
    "url('/cereali.avif')",
    "url('/crostacei.jpg')",
    "url('/uova.png')",
    "url('/pesce.jpeg')",
    "url('/fruttaguscio.jpg')",
    "url('/soia.jpg')",
    "url('/latte.webp')",
    "url('/salse.jpg')",
    "url('/erbe-aromatiche.webp')",
    "url('/sesamo.jpg')",
    "url('/solfiti.jpg')",
    "url('/legumi.jpg')",
    "url('/molluschi.jpg')",
    "url('/verdure.jpg')",
    "url('/salumi.webp')",
  ];

  return (
    <div className="flex flex-col items-center">
      {loading && <p>Caricamento...</p>}
      {error && <p>Error: {error.message}</p>}
      {allergens && (
        <div className="grid grid-cols-1 w-full gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
          {allergens.map((allergen, index) => (
            <Link
              key={allergen.id}
              to={`/allergen/${allergen.id}`}
              className={`shadow-md rounded-lg p-8 transform transition-transform hover:scale-105 ${
                colors[index % colors.length]
              }`}
              style={{
                backgroundImage:
                  backgroundImages[index % backgroundImages.length],
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="bg-black rounded-lg absolute inset-0 opacity-50"></div>
              <h2 className="text-lg text-white font-bold relative">
                {allergen.nome}
              </h2>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllergensList;
