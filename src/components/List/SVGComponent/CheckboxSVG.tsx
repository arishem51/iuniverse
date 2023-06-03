import styled from "styled-components";

const Container = styled.label`
  cursor: pointer;
`;

const Input = styled.input`
  display: none;
  &:checked + svg path {
    stroke-dasharray: 70.5096664428711 9999999;
    stroke-dashoffset: -262.2723388671875;
  }
`;

const SVG = styled.svg`
  overflow: visible;
`;

const Path = styled.path`
  fill: transparent;
  stroke: var(--color-white);
  stroke-width: 6;

  transition: stroke-dasharray 0.5s ease, stroke-dashoffset 0.5s ease;
  stroke-dasharray: 241 9999999;
  stroke-dashoffset: 0;
`;

const CheckBoxSVG = () => {
  return (
    <Container>
      <Input type="checkbox" />
      <SVG viewBox="0 0 64 64" height="32" width="32">
        <Path
          d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
          pathLength="575.0541381835938"
        />
      </SVG>
    </Container>
  );
};

export default CheckBoxSVG;
