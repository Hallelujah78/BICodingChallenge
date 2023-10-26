import componentMap from "../utils/componentMap.js";

const CustomCategoryRenderer = ({ propsObj, data }) => {
  const propsArray = Object.keys(propsObj);
  console.log(propsArray);
  return (
    <>
      {propsArray.map((prop, index) => {
        const Component = componentMap[prop];
        console.log(componentMap[prop]);
        if (Component) {
          return <Component key={index} data={data} />;
        }
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
