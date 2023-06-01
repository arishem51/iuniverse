import styled from "styled-components";
import { FlexContainer } from "@components";

const ExpandRadius = styled(FlexContainer)`
  position: absolute;
  left: -16px;
  align-items: center;
  padding-left: 21px;
  width: 56px;
  height: 56px;
  background-color: var(--color-dark);
  border-radius: 30px;
  transition: width 0.5s;
`;

const Icon = styled.div`
  position: relative;
  width: 12px;
  height: 12px;
  border-top: 2px solid var(--color-white);
  border-right: 2px solid var(--color-white);
  rotate: 45deg;
  z-index: 2;
  transition: translate 0.5s;
  ::after {
    content: "";
    position: absolute;
    top: 7px;
    left: -10px;
    width: 24px;
    height: 2px;
    background-color: var(--color-white);
    rotate: -45deg;
    opacity: 0;
    transition: opacity 0.5s;
  }
`;

const Text = styled.h4`
  position: relative;
  text-transform: uppercase;
  color: var(--color-white);
  left: 56px;
  opacity: 0.1;
  transition: opacity 0.8s;
`;

const Wrapper = styled(FlexContainer)`
  position: relative;
  left: -28px;
  cursor: pointer;
  user-select: none;
  :hover {
    ${ExpandRadius} {
      width: 170px;
    }
    ${Icon} {
      translate: 20px 0;
      ::after {
        opacity: 1;
      }
    }
    ${Text} {
      opacity: 1;
    }
  }
`;

export function ExpandButton() {
  return (
    <Wrapper center>
      <ExpandRadius>
        <Icon />
      </ExpandRadius>
      <Text>hover me</Text>
    </Wrapper>
  );
}
