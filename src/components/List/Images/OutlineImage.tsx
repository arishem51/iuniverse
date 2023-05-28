import styled from "styled-components";
import { ImageContainer } from "@components";

const Image = styled(ImageContainer)`
  --color-stop: transparent 25%, var(--color-white) 25%;
  --bg-corner: from 90deg at 1px 1px;
  --bg-position: 20px 20px;
  --bg-size: calc(100% - 40px) calc(100% - 40px);
  --offset: 10px;

  padding: calc(var(--offset) * 3);
  background: conic-gradient(var(--bg-corner), var(--color-stop))
    var(--bg-position) / var(--bg-size);

  outline: 1px solid white;
  outline-offset: calc(var(--offset) * -1);
  cursor: unset;
`;

export function OutlineImage() {
  return <Image srcId={16} src="https://picsum.photos/id/16/200" />;
}
