// Router DOM
import {Route, Routes} from "react-router";
// Components
import HomePage from "./pages/home-page";
// Pages
import StepTwoPage from "./pages/step-two-page";
import StepThreePage from "./pages/step-three-page";
import StepFourPage from "./pages/step-four-page";
import StepFivePage from "./pages/step-five-page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/step-two" element={<StepTwoPage />} />
      <Route path="/step-three" element={<StepThreePage />} />
      <Route path="/step-four" element={<StepFourPage />} />
      <Route path="/step-five" element={<StepFivePage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default App;