const createArrayOfObjects = ({ object, newObjProp, lookUp, useLookUp }) => {
  const objArray = [];
  try {
    const keys = Object.keys(object);
    keys.forEach((key) => {
      object[key][newObjProp] = useLookUp ? lookUp[key] : key;
      objArray.push(object[key]);
    });
    return objArray;
  } catch (error) {
    console.log(error);
  }
};

export default createArrayOfObjects;
