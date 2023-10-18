import { Tooltip } from "react-tooltip";

import BasicUI from "./pages/BasicUI.js";
import Footer from "./components/Footer.js";

import styled from "styled-components";

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
