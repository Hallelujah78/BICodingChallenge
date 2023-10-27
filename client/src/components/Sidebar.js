// libraries
import { toast } from "react-toastify";
import styled from "styled-components";

const Sidebar = ({ remove, isOpen, setSidebarOpen, setIsNewInsightOpen }) => {
  const deleteAllCustomCategories = () => {
    remove();
    setSidebarOpen(false);
    toast("All custom categories successfully deleted!");
  };

  const openNewInsightWindow = () => {
    setSidebarOpen(false);
    setIsNewInsightOpen(true);
  };

  return (
    <Wrapper className={isOpen ? "open" : ""}>
      <div className="content-center">
        <button onClick={openNewInsightWindow}>New Category</button>
        <button onClick={() => deleteAllCustomCategories()}>Delete All</button>
      </div>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled.aside`
  border-top-left-radius: 20px;
  width: 0;
  position: fixed;
  top: 4.8rem;
  right: 0;
  height: calc(100vh - 4.9rem);
  background-color: #ed96e5;
  z-index: 25;
  opacity: 0;
  transition: 0.2s linear all;

  &.open {
    width: 250px;
    opacity: 1;
  }
  button {
    white-space: nowrap;
    cursor: pointer;
    border: transparent;
    width: 95%;
    border-radius: 35px;
    background: #e14ed2;
    color: white;
    text-transform: uppercase;
    padding: 15px 20px;
    transition: all 0.4s linear;
    margin: 0.25rem auto;

    &:hover {
      background: white;
      color: #e14ed2;
    }
  }
`;
