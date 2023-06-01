import styled from "styled-components";

// Made by @Jaareet - https://uiverse.io/Jaareet/serious-lionfish-75

const StyledInput = styled.input`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-weight: 500;
  font-size: 0.8vw;
  color: var(--color-white);
  background-color: rgb(28, 28, 30);
  box-shadow: 0 0 0.4vw rgba(0, 0, 0, 0.5), 0 0 0 0.15vw transparent;
  border-radius: 0.4vw;
  border: none;
  outline: none;
  padding: 0.4vw;
  max-width: 190px;
  transition: 0.4s;
  &:hover {
    box-shadow: 0 0 0 0.15vw rgba(135, 207, 235, 0.186);
  }
  &:focus {
    box-shadow: 0 0 0 0.15vw skyblue;
  }
`;

export function JaareetInput() {
  return <StyledInput placeholder="Write a message" />;
}
