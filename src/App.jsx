import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";

import Intro from "./pages/Intro.jsx";
import Toc from "./pages/Toc.jsx";
import Chapter01 from "./pages/Chapter01.jsx";
import Chapter02 from "./pages/Chapter02.jsx";
import Chapter03 from "./pages/Chapter03.jsx";
import Chapter04 from "./pages/Chapter04.jsx";
import Chapter05 from "./pages/Chapter05.jsx";
import Chapter06 from "./pages/Chapter06.jsx";
import Chapter07 from "./pages/Chapter07.jsx";
import Chapter08 from "./pages/Chapter08.jsx";
import SpecialEpilogue from "./pages/SpecialEpilogue.jsx";

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/toc" element={<Toc />} />
        <Route path="/chapter-01" element={<Chapter01 />} />
        <Route path="/chapter-02" element={<Chapter02 />} />
        <Route path="/chapter-03" element={<Chapter03 />} />
        <Route path="/chapter-04" element={<Chapter04 />} />
        <Route path="/chapter-05" element={<Chapter05 />} />
        <Route path="/chapter-06" element={<Chapter06 />} />
        <Route path="/chapter-07" element={<Chapter07 />} />
        <Route path="/chapter-08" element={<Chapter08 />} />
        <Route path="/special-page" element={<SpecialEpilogue />} />
      </Routes>
    </>
  );
}