// react
import { useEffect } from "react";

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
  useEffect(() => {
    const preventDoubleClickSelection = (e) => {
      if (e.detail > 1) {
        e.preventDefault();
      }
    };

    document.body.addEventListener("mousedown", preventDoubleClickSelection);

    return () => {
      document.body.removeEventListener(
        "mousedown",
        preventDoubleClickSelection
      );
    };
  }, []);

  return (
    <Wrapper>
      <Tooltip
        data-test="tooltip-text"
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
