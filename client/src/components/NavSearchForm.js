import styled from "styled-components";
import SearchForm from "./SearchForm";

export const NavSearchForm = styled(SearchForm)`
  display: flex;
  transition: 0.5s ease-in all;
  position: relative;
  height: auto;
  width: fit-content;
  z-index: 9999;
  margin: 0.5rem 0 0.5rem 0;
  .btn-container {
    margin-top: 0;
    height: auto;
    display: flex;
    width: auto;
    button {
      border: transparent;
      height: auto;
      width: 4rem;
      border-radius: 35px;
      background: #e14ed2;
      color: white;
      font-size: 0.75rem;
      text-transform: uppercase;
      padding: 0.25rem;
      transition: all 0.3s;
      margin: 0 0 0 0.4rem;
      &:hover {
        background: #ed96e5;
      }
    }
  }
`;
