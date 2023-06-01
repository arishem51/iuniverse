import styled from "styled-components";
import { PatternContainer } from "@components";

const Wrapper = styled(PatternContainer)`
  --bg-size: 100px 100px;
  --bg-size-half: calc((var(--bg-size)) / 2);
  --radial-1: 10% 10%, var(--color-white) 100%, transparent 0;
  --radial-2: 54% 54% at center, transparent 100%, #c39f76 0;

  background: radial-gradient(var(--radial-1)),
    radial-gradient(var(--radial-2)) var(--bg-size-half);
  background-size: var(--bg-size);
`;

export default function Component() {
  return <Wrapper />;
}
