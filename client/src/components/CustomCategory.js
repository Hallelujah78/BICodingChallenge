// react
import { useState } from "react";

// libraries
import styled from "styled-components";
import { useLocalStorage } from "react-use";
import { toast } from "react-toastify";
import { IoClose } from "react-icons/io5";
import { FcPlus } from "react-icons/fc";
// utils
import { titleToField } from "../utils/config";

// components
import FieldsList from "./FieldsList";
import LinearGradient from "./LinearGradient";

const CustomCategory = ({ isNewInsightOpen, setIsNewInsightOpen }) => {
  const [fields, setFields] = useState({});
  const [title, setTitle] = useState("");
  const [value, setValue, remove] = useLocalStorage("customCategories");

  const addItem = ({ e, item }) => {
    e.preventDefault();
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
  };

  return (
    <Wrapper className={isNewInsightOpen ? "new-insight open" : "new-insight"}>
      <LinearGradient />

      <IoClose className="close-btn" onClick={resetAndClose} />
      <h5>New Custom Category</h5>
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
                    <div>
                      <p>{item[1]}</p>
                      <FcPlus
                        className="plus-icon"
                        onClick={(e) => {
                          addItem({ e, item });
                        }}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </form>
        <FieldsList
          fields={fields}
          removeItem={removeItem}
          moveItemUp={moveItemUp}
          moveItemDown={moveItemDown}
        />
      </div>
      <div className="btn-container">
        <button
          className="create-button"
          onClick={(e) => {
            e.preventDefault();
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
  opacity: 0;
  z-index: 9999;
  background-color: var(--grey-50);
  top: -200vh;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100vh;
  border: red solid 1px;
  transition: 0.3s all linear;
  h5 {
    margin: 1.75rem auto 0.75rem auto;
    text-align: center;
    border: red solid 1px;
  }
  .form-container {
    border: red solid 1px;
    margin: 0 auto;
    min-height: calc(95vh - 4rem);
    /* overflow-y: scroll;*/
    max-width: 95vw;
    display: grid;
    grid-template-columns: 40% 1fr;
    place-content: center;
    form {
      div {
        li {
          div {
            border: red solid 1px;
            font-size: calc(0.85rem + 0.390625vw);
            margin: 0.25rem auto;
            grid-template-columns: 1fr 2rem;
            display: grid;
            .plus-icon {
              font-size: 1.75rem;
              margin: auto auto auto 0;
              align-self: center;
            }
            p {
              padding: 0;
              margin: 0.5rem auto 0.5rem 0;
              border: red solid 1px;
            }
          }
        }
      }
    }
    input {
      max-width: 40vw;
    }
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
    .create-button {
      width: 250px;
    }
  }
`;
