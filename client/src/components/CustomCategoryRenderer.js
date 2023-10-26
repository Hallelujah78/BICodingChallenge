// utils
import componentMap from "../utils/componentMap.js";

const CustomCategoryRenderer = ({ propsObj, data }) => {
  const propsArray = Object.keys(propsObj);

  return (
    <>
      {propsArray.map((prop, index) => {
        const Component = componentMap[prop];

        if (Component) {
          return <Component key={index} data={data} />;
        }
        return null;
      })}
    </>
  );
};

export default CustomCategoryRenderer;
