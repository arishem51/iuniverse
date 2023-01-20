import styled from "styled-components";
import { FlexContainer } from "../../Base";

const Wrapper = styled(FlexContainer)`
  border: none;
  position: relative;
  padding: 8px 16px;
  background-color: #6c5ce7;
  border-radius: 4px;
  color: var(--color-white);
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  user-select: none;
  box-shadow: 0 5px 0 0 #a29bfe;
  transition: all 0.1s ease;
  :active {
    translate: 0 5px;
    box-shadow: 0 0 0 0 #a29bfe;
  }
`;

export default function KeyboardButton() {
  return <Wrapper as="button">Click Me</Wrapper>;
}
