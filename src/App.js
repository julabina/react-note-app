import { Route, Routes } from "react-router-dom";
import AddNote from "./Container/AddNote/AddNote";
import Home from "./Container/Home/Home";

function App() {
  return (
    <>
    <Routes basename={process.env.PUBLIC_URL}>
      <Route path="/" element={<Home />} />
      <Route path="/addnote" element={<AddNote />} />
    </Routes>
    </>
  );
}

export default App;
