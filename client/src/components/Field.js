// react
import { useState } from "react";

// libraries
import { FcPlus, FcCancel } from "react-icons/fc";
import styled from "styled-components";

const Field = ({ item, addItem, removeItem }) => {
  const [isIncluded, setIsIncluded] = useState(false);
  return (
    <Wrapper id={item[0]}>
      <div>
        <p>{item[1]}</p>
        {!isIncluded ? (
          <FcPlus
            data-test="add-remove-icon"
            className="add-remove-icon"
            onClick={(e) => {
              setIsIncluded(true);
              addItem({ e, item });
            }}
          />
        ) : (
          <FcCancel
            data-test="add-remove-icon"
            className="add-remove-icon"
            onClick={() => {
              setIsIncluded(false);
              removeItem(item[0]);
            }}
          />
        )}
      </div>
    </Wrapper>
  );
};
export default Field;

const Wrapper = styled.li`
  div {
    font-size: calc(0.85rem + 0.390625vw);
    margin: 0.25rem auto;
    grid-template-columns: 1fr 2rem;
    display: grid;
    .add-remove-icon {
      font-size: 1.75rem;
      margin: auto auto auto 0;
      align-self: center;
      &:hover {
        cursor: pointer;
      }
    }
    p {
      padding: 0;
      margin: 0.5rem auto 0.5rem 0;
    }
  }
`;
