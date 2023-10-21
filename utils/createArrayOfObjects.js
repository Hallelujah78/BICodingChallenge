const createArrayOfObjects = ({ object, newObjProp, lookUp, useLookUp }) => {
  const objArray = [];
  try {
    const keys = Object.keys(object);
    keys.forEach((key) => {
      object[key][newObjProp] = useLookUp ? lookUp[key] : key;

      console.log(key);
      objArray.push(object[key]);
    });
    return objArray;
  } catch (error) {
    // console.log(error);
    console.log("***createArrayOfObjects ERROR***");
  }
};

export default createArrayOfObjects;
