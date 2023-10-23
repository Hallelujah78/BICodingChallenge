import { by639_2T } from "iso-language-codes";

const createArrayOfObjects = ({ object, newObjProp, lookUp, useLookUp }) => {
  const objArray = [];
  try {
    const keys = Object.keys(object);
    keys.forEach((key) => {
      object[key][newObjProp] = useLookUp ? lookUp[key] : key;
      if (newObjProp && newObjProp === "lang" && key?.length === 3) {
        object[key]["iso6391"] = by639_2T[key]?.iso639_1
          ? by639_2T[key].iso639_1
          : "";
      }

      objArray.push(object[key]);
    });
    return objArray;
  } catch (error) {
    console.log(error);
  }
};

export default createArrayOfObjects;
