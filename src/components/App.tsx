import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";
import MainContent from "./MainContent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path=":id" element={<MainContent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
