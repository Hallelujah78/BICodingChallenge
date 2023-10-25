// libraries
import { Tooltip } from "react-tooltip";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";

// components
import Footer from "./components/Footer.js";

// pages
import BasicUI from "./pages/BasicUI.js";

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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  position: relative;
  min-height: 900px;
`;
