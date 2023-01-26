import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import HomeLayout from "./Home";
import HomePage from "./Home/HomePage";
import MainContent from "./MainContent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<HomePage />} />
          <Route path=":id" element={<MainContent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
