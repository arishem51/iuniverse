import styled from "styled-components";

export default styled.button`
  all: unset;
  padding: 10px 20px;
  background-color: rgb(0, 140, 255);
  border-radius: 10px;
  box-shadow: 0 0 25px rgb(0, 140, 255);
  transition: box-shadow 0.5s;
  color: var(--color-white);
  text-transform: uppercase;
  letter-spacing: 8px;
  font-weight: 700;
  cursor: pointer;
  :hover {
    box-shadow: 0 0 5px rgb(0, 140, 255), 0 0 25px rgb(0, 140, 255),
      0 0 50px rgb(0, 140, 255), 0 0 100px rgb(0, 140, 255);
  }
`;
