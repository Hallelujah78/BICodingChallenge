import { useState, useEffect } from "react";

// utils
import { titleToField } from "../utils/config";

const CustomCategory = ({ countryData }) => {
  const [fields, setFields] = useState([]);
  const [title, setTitle] = useState("");

  const addItem = (e) => {
    e.preventDefault();
    setFields([...fields, e.currentTarget.closest("li").id]);
  };

  return (
    <div>
      <form>
        <input type="text" placeholder="enter a title" />
        <div>
          <ul>
            {Object.entries(titleToField).map((item) => {
              return (
                <li id={item[0]} key={item[0]}>
                  {item[1]}
                  <button
                    onClick={(e) => {
                      addItem(e);
                    }}
                  >
                    +
                  </button>
                </li>
              );
            })}
          </ul>
          <button>Create!</button>
        </div>
        {countryData
          ? fields.map((field) => {
              let keys = field.split(".");

              return <div key={field}>{countryData[keys[0]][keys[1]]}</div>;
            })
          : null}
      </form>
    </div>
  );
};
export default CustomCategory;
