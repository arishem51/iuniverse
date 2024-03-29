import styled from "styled-components";
import { ImageContainer } from "@components";

const Wrapper = styled(ImageContainer)`
  --color: #fa6900;

  padding: 30px;

  background: radial-gradient(20px, var(--color) 97%, #0000);
  background-repeat: repeat;
  background-size: 40px 40px;
  background-position: 0 0;

  mask: conic-gradient(from 90deg at 40px 40px, transparent 25%, #000 0) -20px -20px,
    linear-gradient(red 0 0) content-box;
`;

export default function Component() {
  return <Wrapper srcId={198} src="https://picsum.photos/id/198/200"></Wrapper>;
}
