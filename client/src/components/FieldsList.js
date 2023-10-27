import styled from "styled-components";

const FieldsList = ({ fields, removeItem, moveItemUp, moveItemDown }) => {
  return (
    <Wrapper>
      <h5>Fields to Include</h5>
      {fields
        ? Object.entries(fields).map((field, index) => {
            const objLength = Object.keys(fields).length;
            console.log(objLength);
            return (
              <div key={field[1]}>
                <button
                  onClick={() => {
                    removeItem(field[0]);
                  }}
                >
                  x
                </button>
                {field[1]}
                {index < objLength - 1 ? (
                  <button onClick={() => moveItemDown(field[0])}>Down</button>
                ) : null}
                {index > 0 ? (
                  <button onClick={() => moveItemUp(field[0])}>Up</button>
                ) : null}
              </div>
            );
          })
        : null}
    </Wrapper>
  );
};
export default FieldsList;

const Wrapper = styled.div`
  font-size: calc(0.85rem + 0.390625vw);
`;
