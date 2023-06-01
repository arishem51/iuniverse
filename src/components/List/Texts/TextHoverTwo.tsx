import styled from "styled-components";

const Text = styled.h1`
  --duration: 0.3s;
  --bg-position-delay: 0s;
  --color-delay: 0s;
  --bg-size-delay: var(--duration);
  --color: #1095c1;
  padding: 0 0.1em;
  font-size: 4em;
  color: var(--color);
  background: linear-gradient(var(--color) 0 0) no-repeat;
  background-position: 0 1.4em;
  background-size: 0 100%;
  transition: background-position var(--duration) var(--bg-position-delay),
    background-size var(--duration) var(--bg-size-delay),
    color var(--duration) var(--color-delay);
  cursor: pointer;
  white-space: nowrap;
  :hover {
    --bg-position-delay: var(--duration);
    --bg-size-delay: 0s;
    --color-delay: var(--duration);
    background-position: 0 0;
    background-size: 100% 100%;
    color: var(--color-white);
  }
`;

export default function TextHoverTwo() {
  return <Text>Hover Me</Text>;
}
