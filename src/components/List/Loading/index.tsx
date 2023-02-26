import styled from "styled-components";
import { FlexContainer } from "../../Base";
import Rain from "../Loaders/Rain";

const Wrapper = styled(FlexContainer)`
  flex: 1;
`;

export default function Loading() {
  return (
    <Wrapper center>
      <Rain />
    </Wrapper>
  );
}
