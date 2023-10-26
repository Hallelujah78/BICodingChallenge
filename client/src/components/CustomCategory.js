// react

import { useState, useEffect } from "react";

// libraries
import styled from "styled-components";
import { useLocalStorage } from "react-use";
import { toast } from "react-toastify";

// utils
import { titleToField } from "../utils/config";
import FieldsList from "./FieldsList";

const CustomCategory = ({ countryData }) => {
  const [fields, setFields] = useState({});
  const [title, setTitle] = useState("");
  const [value, setValue, remove] = useLocalStorage("customCategories");

  const addItem = ({ e, item }) => {
    e.preventDefault();
    setFields({ ...fields, [item[0]]: item[1] });
  };

  const removeItem = (itemProp) => {
    const updatedObject = { ...fields };

    if (updatedObject.hasOwnProperty(itemProp)) {
      delete updatedObject[itemProp];
    }
    setFields(updatedObject);
  };

  const moveItemUp = (item) => {
    const fieldArray = Object.entries({ ...fields });

    const index = fieldArray.findIndex((field) => {
      return field.includes(item);
    });

    const itemToBeMovedUp = fieldArray[index];
    fieldArray[index] = fieldArray[index - 1];
    fieldArray[index - 1] = itemToBeMovedUp;

    const updatedObject = {};
    fieldArray.forEach((field) => {
      updatedObject[field[0]] = field[1];
    });
    setFields(updatedObject);
  };

  const moveItemDown = (item) => {
    const fieldArray = Object.entries({ ...fields });

    const index = fieldArray.findIndex((field) => {
      return field.includes(item);
    });

    const itemToBeMovedDown = fieldArray[index];
    fieldArray[index] = fieldArray[index + 1];
    fieldArray[index + 1] = itemToBeMovedDown;

    const updatedObject = {};
    fieldArray.forEach((field) => {
      updatedObject[field[0]] = field[1];
    });
    setFields(updatedObject);
  };

  const createCategory = (title, fields) => {
    const category = [title, fields, { display: true }];

    if (!title || Object.keys(fields).length === 0) {
      toast(
        "To create a custom category you must enter a title and at least one field!"
      );
      return;
    }
    if (value) {
      const newValue = [...value, category];
      setValue(newValue);
    } else {
      setValue([category]);
    }
    setFields({});
    setTitle("");
  };

  return (
    <Wrapper>
      <button>X</button>
      <div className="form-container">
        <form>
          <input
            value={title}
            type="text"
            placeholder="enter a title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <div>
            <ul>
              {Object.entries(titleToField).map((item) => {
                return (
                  <li id={item[0]} key={item[0]}>
                    {item[1]}
                    <button
                      onClick={(e) => {
                        addItem({ e, item });
                      }}
                    >
                      +
                    </button>
                  </li>
                );
              })}
            </ul>
            <button
              onClick={(e) => {
                e.preventDefault();
                createCategory(title, fields);
              }}
            >
              Create!
            </button>
          </div>
        </form>
        <FieldsList
          fields={fields}
          removeItem={removeItem}
          moveItemUp={moveItemUp}
          moveItemDown={moveItemDown}
        />
      </div>
    </Wrapper>
  );
};
export default CustomCategory;

const Wrapper = styled.div`
  position: absolute;
  width: 90vw;
  height: 90vh;
  border: red solid 1px;
  .form-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-content: center;
  }
`;
