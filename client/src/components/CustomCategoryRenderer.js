import componentMap from "../utils/componentMap.js";

// propsArray = [general.nameOfficial, general.nameCommon]

const CustomCategoryRenderer = ({ propsObj, data }) => {
  const properties = Object.keys(propsObj);

  const propsArray = [];
  properties.forEach((prop) => {
    const keys = prop.split(".");

    const [category, field] = keys;
    let tempObj = {};
    tempObj.type = prop;
    tempObj.info = data[category][field];
    propsArray.push(tempObj);
  });

  return (
    <>
      {propsArray.map((prop, index) => {
        const Component = componentMap[prop.type];
        const { info } = prop;

        if (Component) {
          return <Component key={index} info={info} />;
        }
        // Handle unsupported types or return a default component if necessary
        return null;
      })}
    </>
  );
};

export default CustomCategoryRenderer;
/*
Object.keys(value[0]).map(()=>{
    
})

*/
