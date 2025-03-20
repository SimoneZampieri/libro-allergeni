import React, { createContext, useState, useCallback } from "react";
import axios from "axios";

// Create the context
export const GlobalContext = createContext();

// Create a provider component
export const GlobalProvider = ({ children }) => {
  // Define your global state here
  const [apiUrl] = useState(import.meta.env.VITE_API_URL);
  const [allergens, setAllergens] = useState([]);
  const [allergen, setAllergen] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch the list of allergens
  const fetchAllergens = useCallback(() => {
    setLoading(true);
    setError(null);
    axios
      .get(`${apiUrl}/allergeni`)
      .then((response) => {
        setAllergens(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [apiUrl]);

  // Fetch a single allergen by ID
  const fetchAllergenById = useCallback(
    (id) => {
      setLoading(true);
      setError(null);
      axios
        .get(`${apiUrl}/allergeni/${id}`)
        .then((response) => {
          setAllergen(response.data);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [apiUrl]
  );

  return (
    <GlobalContext.Provider
      value={{
        apiUrl,
        allergens,
        allergen,
        loading,
        error,
        fetchAllergens,
        fetchAllergenById,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
