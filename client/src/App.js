import BasicUI from "./pages/BasicUI.js";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<BasicUI />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
const Wrapper = styled.div`
  position: relative;
  min-height: 900px;
`;
