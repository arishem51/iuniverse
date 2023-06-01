import styled from "styled-components";
import { ImageContainer } from "@components";

const Image = styled(ImageContainer)`
  --offset: 0.5em;
  --position: 25%;
  --reverse-position: calc(150% - var(--position));
  --color-stop: transparent 0 25%, #fcd703 0 50%;
  --bg-size: 200% var(--offset);
  --reverse-bg-size: var(--offset) 200%;

  padding: calc(var(--offset) * 2);

  background: repeating-linear-gradient(to right, var(--color-stop))
      var(--position) 0 / var(--bg-size),
    repeating-linear-gradient(to right, var(--color-stop))
      var(--reverse-position) 100% / var(--bg-size),
    repeating-linear-gradient(to bottom, var(--color-stop)) 100% var(--position) /
      var(--reverse-bg-size),
    repeating-linear-gradient(to bottom, var(--color-stop)) 0
      var(--reverse-position) / var(--reverse-bg-size);
  background-repeat: no-repeat;

  transition: background-position 0.3s;
  :hover {
    --position: 75%;
  }
`;

export function FrameRevealThree() {
  return <Image srcId={40} src="https://picsum.photos/id/40/200" />;
}
