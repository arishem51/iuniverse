import styled from "styled-components";
import { PatternContainer } from "@components";

const Wrapper = styled(PatternContainer)`
  --color-1: #f2f2f2;
  --color-2: #cdcbcc;
  --color-3: #999999;
  --color-stop: 0 120deg, transparent 0;

  background: conic-gradient(
      from 0deg at calc(500% / 6) calc(100% / 3),
      var(--color-3) var(--color-stop)
    ),
    conic-gradient(
      from -120deg at calc(100% / 6) calc(100% / 3),
      var(--color-2) var(--color-stop)
    ),
    conic-gradient(
      from 120deg at calc(100% / 3) calc(500% / 6),
      var(--color-1) var(--color-stop)
    ),
    conic-gradient(
      from 120deg at calc(200% / 3) calc(500% / 6),
      var(--color-1) var(--color-stop)
    ),
    conic-gradient(
      from -180deg at calc(100% / 3) 50%,
      var(--color-2) 60deg,
      var(--color-1) var(--color-stop)
    ),
    conic-gradient(
      from 60deg at calc(200% / 3) 50%,
      var(--color-1) 60deg,
      var(--color-3) var(--color-stop)
    ),
    conic-gradient(
      from -60deg at 50% calc(100% / 3),
      var(--color-1) 120deg,
      var(--color-2) 0 240deg,
      var(--color-3) 0
    );
  background-size: calc(var(--size) / 1.5) calc(var(--size) / 2.5);
`;

export default function Backround3D() {
  return <Wrapper />;
}
