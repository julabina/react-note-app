import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import AddNote from "./Container/AddNote/AddNote";
import Home from "./Container/Home/Home";
import ReadNote from "./Container/ReadNote/ReadNote";

function App() {
  return (
    <>
    <Navbar />
    <Routes basename={process.env.PUBLIC_URL}>
      <Route path="/" element={<Home />} />
      <Route path="/addnote" element={<AddNote />} />
      <Route path="/note/:note" element={<ReadNote />} />
    </Routes>
    </>
  );
}

export default App;
