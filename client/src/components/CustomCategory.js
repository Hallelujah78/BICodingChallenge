// react
import { useState, useEffect } from "react";

// libraries
import styled from "styled-components";

import { toast } from "react-toastify";
import { IoClose } from "react-icons/io5";

// utils
import { titleToField } from "../utils/config";

// components
import FieldsList from "./FieldsList";
import LinearGradient from "./LinearGradient";
import Field from "./Field.js";

const CustomCategory = ({
  value,
  setValue,
  isNewInsightOpen,
  setIsNewInsightOpen,
}) => {
  const [fields, setFields] = useState({});
  const [title, setTitle] = useState("");
  const [keyState, setKeyState] = useState(0);

  useEffect(() => {
    setKeyState((prevState) => prevState + 1);
  }, [isNewInsightOpen]);

  const addItem = ({ item }) => {
    setFields({ ...fields, [item[0]]: item[1] });
  };

  const resetAndClose = () => {
    setFields({});
    setTitle("");
    setIsNewInsightOpen(false);
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
    setIsNewInsightOpen(false);
    toast("New custom category successfully created!");
  };

  return (
    <Wrapper
      key={keyState}
      className={isNewInsightOpen ? "new-insight open" : "new-insight"}
    >
      <LinearGradient />

      <IoClose className="close-btn" onClick={resetAndClose} />
      <h5>New Custom Category</h5>
      <div className="form-container">
        <form>
          <h5>Fields</h5>

          <div>
            <ul>
              {Object.entries(titleToField).map((item) => {
                return (
                  <Field
                    item={item}
                    addItem={addItem}
                    removeItem={removeItem}
                    key={item[0]}
                  />
                );
              })}
            </ul>
          </div>
        </form>
        <FieldsList
          className="fields-list"
          fields={fields}
          removeItem={removeItem}
          moveItemUp={moveItemUp}
          moveItemDown={moveItemDown}
        />
      </div>

      <div className="btn-container">
        <label htmlFor="category-title">Enter a Title</label>
        <input
          data-test="category-title-input"
          value={title}
          id="category-title"
          type="text"
          placeholder="enter a title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <button
          className="create-button"
          onClick={(e) => {
            createCategory(title, fields);
          }}
        >
          Create
        </button>
      </div>
    </Wrapper>
  );
};
export default CustomCategory;

const Wrapper = styled.div`
  overflow-y: scroll;
  opacity: 0;
  z-index: 99999999;
  background-color: var(--grey-50);
  top: -200vh;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100vh;

  transition: 0.3s all linear;
  h5 {
    margin: 1.75rem auto 0.75rem auto;
    text-align: center;
  }
  .form-container {
    margin: 0 auto;
    min-height: calc(95vh - 4rem);
    max-width: 95vw;
    display: grid;
    grid-template-columns: 40% 60%;
    place-content: center;
  }
  &.open {
    top: 0;
    opacity: 1;
  }
  .close-btn {
    cursor: pointer;
    position: absolute;
    right: 1.25rem;
    top: 1.25rem;
    font-size: 3rem;
    transition: 0.3s linear all;
    &:hover {
      transform: rotate(90deg);
    }
  }
  .btn-container {
    text-align: center;
    margin-top: 3rem;
  }
  .create-button {
    border: transparent;
    max-width: 50%;
    width: 40%;
    border-radius: 35px;
    background: #e14ed2;
    color: white;
    text-transform: uppercase;
    padding: 15px 20px;
    transition: all 0.3s;
    margin: 4rem auto;

    &:hover {
      background: #ed96e5;
    }
  }
  @media (min-width: 800px) {
    .btn-container {
      display: grid;
      input {
        margin: auto;
        max-width: 250px;
        height: 2rem;
      }
    }
    .create-button {
      width: 250px;
    }
  }
  input {
    margin-top: 2rem;
    margin-left: 0.5rem;
    max-width: 40vw;
    height: 3rem;
  }
`;
