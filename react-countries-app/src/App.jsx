// Router DOM
import {Route, Routes} from "react-router-dom";
// Pages
import HomePage from "./pages/HomePage";
import CountryPage from "./pages/CountryPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:alpha3Code" element={<CountryPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
export default App;
