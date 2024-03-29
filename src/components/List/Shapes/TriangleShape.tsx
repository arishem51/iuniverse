import styled from "styled-components";

// Allmost shapes are made by the following link: https://css-tricks.com/the-shapes-of-css/

const RightShape = styled.div`
  --border-size: 100px;
  --size: 0;
  width: var(--size);
  left: var(--size);
  border-top: calc(var(--border-size) / 1.5) solid transparent;
  border-bottom: calc(var(--border-size) / 1.5) solid transparent;
  border-left: var(--border-size) solid var(--color-lightGrey);
`;

const UpShape = styled.div`
  --border-size: 100px;
  --size: 0;
  width: var(--size);
  left: var(--size);
  border-left: calc(var(--border-size) / 1.5) solid transparent;
  border-right: calc(var(--border-size) / 1.5) solid transparent;
  border-bottom: var(--border-size) solid var(--color-lightGrey);
`;

const DownShape = styled.div`
  --border-size: 100px;
  --size: 0;
  width: var(--size);
  left: var(--size);
  border-left: calc(var(--border-size) / 1.5) solid transparent;
  border-right: calc(var(--border-size) / 1.5) solid transparent;
  border-top: var(--border-size) solid var(--color-lightGrey);
`;

const LeftShape = styled.div`
  --border-size: 100px;
  --size: 0;
  width: var(--size);
  left: var(--size);
  border-top: calc(var(--border-size) / 1.5) solid transparent;
  border-bottom: calc(var(--border-size) / 1.5) solid transparent;
  border-right: var(--border-size) solid var(--color-lightGrey);
`;

const TopLeftShape = styled.div`
  --border-size: 50px;
  --size: 0;
  width: var(--size);
  left: var(--size);
  border-right: var(--border-size) solid transparent;
  border-bottom: var(--border-size) solid transparent;
  border-top: var(--border-size) solid var(--color-lightGrey);
  border-left: var(--border-size) solid var(--color-lightGrey);
`;

const TopRightShape = styled.div`
  --border-size: 50px;
  --size: 0;
  width: var(--size);
  left: var(--size);
  border-left: var(--border-size) solid transparent;
  border-bottom: var(--border-size) solid transparent;
  border-top: var(--border-size) solid var(--color-lightGrey);
  border-right: var(--border-size) solid var(--color-lightGrey);
`;

const BottomLeftShape = styled.div`
  --border-size: 50px;
  --size: 0;
  width: var(--size);
  left: var(--size);
  border-right: var(--border-size) solid transparent;
  border-top: var(--border-size) solid transparent;
  border-bottom: var(--border-size) solid var(--color-lightGrey);
  border-left: var(--border-size) solid var(--color-lightGrey);
`;

const BottomRightShape = styled.div`
  --border-size: 50px;
  --size: 0;
  width: var(--size);
  left: var(--size);
  border-left: var(--border-size) solid transparent;
  border-top: var(--border-size) solid transparent;
  border-bottom: var(--border-size) solid var(--color-lightGrey);
  border-right: var(--border-size) solid var(--color-lightGrey);
`;

function Up() {
  return <UpShape />;
}

function Down() {
  return <DownShape />;
}

function Left() {
  return <LeftShape />;
}

function Right() {
  return <RightShape />;
}
function TopLeft() {
  return <TopLeftShape />;
}
function TopRight() {
  return <TopRightShape />;
}

function BottomLeft() {
  return <BottomLeftShape />;
}
function BottomRight() {
  return <BottomRightShape />;
}

const TritangleShape = {
  Right,
  TopLeft,
  TopRight,
  BottomLeft,
  BottomRight,
  Left,
  Down,
  Up,
};

export default TritangleShape;
