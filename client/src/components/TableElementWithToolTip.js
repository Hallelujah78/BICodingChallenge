// libraries
import { FaCircleInfo } from "react-icons/fa6";
import styled from "styled-components";

const TableElementWithToolTip = ({
  headingText,
  toolTipText,
  isHeading = true,
}) => {
  return (
    <Wrapper className={isHeading ? "" : "flex"}>
      <div className={isHeading ? "heading" : ""}>{headingText}</div>
      <div className="icon-container">
        <FaCircleInfo
          className="info-icon"
          data-tooltip-id="my-tooltip"
          data-tooltip-place="left"
          data-tooltip-html={toolTipText}
        />
      </div>
    </Wrapper>
  );
};
export default TableElementWithToolTip;

const Wrapper = styled.div`
  &.flex {
    display: flex;
    .icon-container {
      position: relative;
    }
  }
  .heading {
    text-align: center;
  }
  position: relative;
  .icon-container {
    width: 100%;
    position: absolute;
    display: grid;
    place-content: center;
    .info-icon {
      color: skyblue;
      font-size: 1.5rem;
    }
  }
`;
