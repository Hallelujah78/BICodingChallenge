import React, { useState } from "react";
import styled from "styled-components";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Wrapper className="accordion-item">
      <header onClick={() => setIsActive(!isActive)}>
        <h1 className="center">{title}</h1>
        <div className="accordion-icon">
          {isActive ? <FaAngleDoubleUp /> : <FaAngleDoubleDown />}
        </div>
      </header>
      {isActive && <div className="accordion-content">{content}</div>}
    </Wrapper>
  );
};

export default Accordion;

const Wrapper = styled.div`
  height: 3rem;
  box-shadow: 5px 10px 8px #888888;
  position: relative;
  width: 100%;
  margin: 1.25rem auto;
  border-radius: 20px;
  cursor: pointer;
  header {
    display: grid;
    grid-template-columns: 4fr 1fr;
    place-content: center;
    height: 3rem;
    color: white;
    background-color: #e14ed2;
    border-radius: 20px;
    text-align: center;
    h1 {
      font-size: calc(1.25rem + 0.390625vw);
      line-height: 2rem;
    }
  }
  .center {
    width: 97%;
    margin: 0 auto;
  }
  .accordion-icon {
    margin: auto;
    margin-top: 0.4rem;
  }
  .accordion-content {
    transition: 0.5s linear all;
  }
`;
