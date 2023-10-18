import styled from "styled-components";
import SearchForm from "./SearchForm";

export const NavSearchForm = styled(SearchForm)`
  display: flex;
  transition: 0.5s ease-in all;
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
  height: fit-content;
  z-index: 9999;
  border: red solid 1px;
  .btn-container {
    height: 3rem;
    margin: -1rem;
    display: flex;
    justify-content: space-between;

    button {
      border: transparent;
      height: auto;
      width: 5rem;
      border-radius: 35px;
      background: #e14ed2;
      color: white;
      font-size: 0.75rem;
      text-transform: uppercase;
      padding: 0.25rem;
      transition: all 0.3s;
      margin: 0 0 0 0.5rem;
      &:hover {
        background: #ed96e5;
      }
    }
  }
`;
