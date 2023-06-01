import styled from "styled-components";
import { PatternContainer } from "@components";

const Tritangular = styled(PatternContainer)`
  --bg-size: calc(var(--size) / 2) calc(var(--size) / 2);
  background: conic-gradient(
        from 150deg at 50% 33%,
        #fa6900 60deg,
        transparent 0
      )
      50px -12.5px,
    conic-gradient(from -30deg at 50% 66%, #d95b43 60deg, #ecd078 0) 0 12.5px;
  background-size: var(--bg-size);
`;

export default function Component() {
  return <Tritangular />;
}
