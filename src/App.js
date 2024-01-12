import { BrowserRouter, Route, Routes } from "react-router-dom";

// PAGES
import Store from "./pages/Store";


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/store" element={<Store />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
