import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import AddNote from "./Container/AddNote/AddNote";
import Home from "./Container/Home/Home";
import NotFound from "./Container/NotFound/NotFound";
import ReadNote from "./Container/ReadNote/ReadNote";

function App() {
  return (
    <>
    <Navbar />
    <Routes basename={process.env.PUBLIC_URL}>
      <Route path="react-note-app/" element={<Home />} />
      <Route path="react-note-app/addnote" element={<AddNote />} />
      <Route path="react-note-app/note/:note" element={<ReadNote />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
}

export default App;
