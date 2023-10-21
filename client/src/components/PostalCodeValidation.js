// react
import { useState, useEffect } from "react";

// libraries
import styled from "styled-components";
import { TbCircleCheck, TbCircleX } from "react-icons/tb";

const PostalCodeValidation = ({ regex }) => {
  const [code, setCode] = useState("");
  const [isValid, setIsValid] = useState(false);
  const handleChange = (e) => {
    setCode(e.target.value);
  };

  useEffect(() => {
    const tempRegex = new RegExp(regex);
    if (tempRegex.test(code)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [code, regex]);

  return (
    <Wrapper>
      <input onChange={(e) => handleChange(e)} type="text" />
      <div>
        {code ? (
          isValid ? (
            <TbCircleCheck className="check icon" />
          ) : (
            <TbCircleX className="cross icon" />
          )
        ) : null}
      </div>
    </Wrapper>
  );
};
export default PostalCodeValidation;

const Wrapper = styled.div`
  position: relative;
  input {
    height: 2.25rem;
    width: 100%;
  }
  div {
    position: absolute;
    top: 0;
    right: 0;
    width: 2.25rem;
    height: 2.25rem;
    font-size: 2rem;
  }
  .icon {
    width: 100%;
    display: block;
    margin: auto;
    height: auto;
  }
  .cross {
    color: red;
  }
  .check {
    color: green;
  }
`;
