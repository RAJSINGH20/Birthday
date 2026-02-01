import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Name from "./Components/Name.jsx";
import BirthdayCard from "./Components/BirthdayCard.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Name />} />
        <Route path="/birthday" element={<BirthdayCard />} />
      </Routes>
    </Router>
  );
}

export default App;
