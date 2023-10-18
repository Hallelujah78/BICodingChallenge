import BasicUI from "./pages/BasicUI.js";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import styled from "styled-components";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

function App() {
  return (
    <Wrapper>
      <Tooltip
        id="my-tooltip"
        style={{
          backgroundColor: "black",
          color: "#fff",
          zIndex: 999,
        }}
      />
      <Navbar />
      <BasicUI />
      <Footer />
    </Wrapper>
  );
}

export default App;
const Wrapper = styled.div`
  position: relative;
  min-height: 900px;
`;
