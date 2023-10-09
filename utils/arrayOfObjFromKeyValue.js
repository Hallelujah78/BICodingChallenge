const arrayOfObjectsFromKeyValue = ({ object, newKeyName, newValueName }) => {
  const objArray = [];
  try {
    const keys = Object.keys(object);
    keys.forEach((key) => {
      const newObj = {};
      newObj[newKeyName] = key;
      newObj[newValueName] = object[key];
      objArray.push(newObj);
    });

    return objArray;
  } catch (error) {
    // console.log(error);
    console.log("***arrayOfObjFromKeyValue ERROR***");
  }
};

export default arrayOfObjectsFromKeyValue;
