import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";
import DefLayout from "./layout/DefLayout";
import AllergensList from "./components/AllergensList";
import AllergenDetails from "./components/AllergenDetails";

const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <DefLayout>
          <Routes>
            <Route path="/" element={<AllergensList />} />
            <Route path="/allergen/:id" element={<AllergenDetails />} />
          </Routes>
        </DefLayout>
      </Router>
    </GlobalProvider>
  );
};

export default App;
