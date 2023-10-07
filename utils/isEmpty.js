const isEmpty = (obj) => {
  if (obj === null) {
    return;
  }
  return Object.keys(obj).length === 0;
};

export default isEmpty;
