// libraries
import styled from "styled-components";
import {
  IoChevronDownCircleOutline,
  IoChevronUpCircleOutline,
} from "react-icons/io5";

const FieldsList = ({ fields, moveItemUp, moveItemDown }) => {
  return (
    <Wrapper>
      <h5>Fields Included</h5>
      <div className="fields-container">
        {fields
          ? Object.entries(fields).map((field, index) => {
              const objLength = Object.keys(fields).length;

              return (
                <div className="field" key={field[1]}>
                  <div data-test="field-title" className="field-title">
                    {field[1]}
                  </div>
                  <div>
                    {index < objLength - 1 ? (
                      <IoChevronDownCircleOutline
                        data-test="move-down-icon"
                        className="move-icon"
                        onClick={() => moveItemDown(field[0])}
                      />
                    ) : null}
                    {index > 0 ? (
                      <IoChevronUpCircleOutline
                        data-test="move-up-icon"
                        className="move-icon"
                        onClick={() => moveItemUp(field[0])}
                      />
                    ) : null}
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </Wrapper>
  );
};
export default FieldsList;

const Wrapper = styled.div`
  border-left: lightgray solid 2px;
  font-size: calc(0.85rem + 0.390625vw);
  .fields-container {
    .field {
      display: grid;
      grid-template-columns: 60% 40%;
      margin: 1rem auto;

      align-content: space-between;
    }
    .field-title {
      overflow-x: hidden;
      white-space: nowrap;
      margin-left: 1rem;
    }
  }
  .move-icon {
    font-size: 1.9rem;
    margin: auto auto auto 0;
    align-self: center;
    margin-left: 0.75rem;
    &:hover {
      cursor: pointer;
    }
  }
`;
