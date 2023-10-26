import styled from "styled-components";

const Sidebar = ({ isOpen }) => {
  return (
    <Wrapper className={isOpen ? "open" : ""}>
      <div className="content-center">
        <button>Create</button>
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
    cursor: pointer;
    border: transparent;
    width: 95%;
    border-radius: 35px;
    background: #e14ed2;
    color: white;
    text-transform: uppercase;
    padding: 15px 20px;
    transition: all 0.3s;
    margin: 0 auto;

    &:hover {
      background: white;
      color: #e14ed2;
    }
  }
`;
