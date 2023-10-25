const FieldsList = ({ fields, removeItem, moveItemUp, moveItemDown }) => {
  return (
    <div>
      <h2>Fields to Include</h2>
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
    </div>
  );
};
export default FieldsList;
