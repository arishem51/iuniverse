import styled from "styled-components";
import { FlexContainer } from "../Base";
import NavLink from "../NavLink";

const Wrapper = styled(FlexContainer)`
  gap: 3rem;
  height: 5vh;
  width: 100%;
  padding: 2.5rem 0;
  background-color: var(--color-dark);
`;

export default function Header() {
  return (
    <Wrapper center>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/all">Components</NavLink>
    </Wrapper>
  );
}
