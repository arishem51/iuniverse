import styled from "styled-components";

const Container = styled.div`
  --child-width: 70px;
  --child-height: 35px;
  --bd-size: 15px;
  --position: 60px;

  position: relative;
  top: var(--position);
  left: var(--position);
`;

const Child = styled.div`
  position: relative;

  border-radius: 100px 100px 0 0;
  border-top: var(--bd-size) solid var(--color-white);
  border-right: var(--bd-size) solid var(--color-white);
  border-left: var(--bd-size) solid var(--color-white);
`;

const FirstChild = styled(Child)`
  width: var(--child-width);
  height: var(--child-height);
`;

const SecondChild = styled(Child)`
  right: calc(var(--bd-size) * 2);
  top: calc(var(--bd-size) * -1);

  width: calc(var(--child-width) + var(--bd-size) * 2);
  height: calc(var(--child-height) + var(--bd-size));
  transform: rotate(180deg);
`;

const ThirdChild = styled(Child)`
  top: -130px;
  right: calc(var(--bd-size) * 2);

  width: calc(var(--child-width) + var(--bd-size) * 4);
  height: calc(var(--child-height) + var(--bd-size) * 2);
`;

const LastChild = styled(Child)`
  top: -130px;
  right: calc(var(--bd-size) * 4);

  width: calc(var(--child-width) + var(--bd-size) * 6);
  height: calc(var(--child-height) + var(--bd-size) * 3);

  transform: rotate(180deg);
`;

const Dot = styled.div`
  --position: calc(var(--bd-size) / 2 * -1);

  position: relative;
  width: var(--bd-size);
  height: var(--bd-size);
  background: white;
  border-radius: 50%;
  right: 0.08px;
`;

const FirstDot = styled(Dot)`
  top: var(--position);
`;

const SecondDot = styled(Dot)`
  top: -215px;
  right: 60.2px;
`;

const Spiral = () => {
  return (
    <Container>
      <FirstChild />
      <FirstDot />
      <SecondChild />
      <ThirdChild />
      <LastChild />
      <SecondDot />
    </Container>
  );
};

export default Spiral;
