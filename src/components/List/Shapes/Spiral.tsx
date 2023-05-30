import styled from "styled-components";

const Container = styled.div`
  position: relative;
  --bd-size: 15px;
`;

const FirstChild = styled.div`
  width: 70px;
  height: 35px;
  border-radius: 100px 100px 0 0;
  border-top: var(--bd-size) solid var(--color-white);
  border-right: var(--bd-size) solid var(--color-white);
  border-left: var(--bd-size) solid var(--color-white);
`;

const Dot = styled.div`
  --position: calc(var(--bd-size) / 2 * -1);

  position: relative;
  top: var(--position);
  width: var(--bd-size);
  height: var(--bd-size);
  background: white;
  border-radius: 50%;
`;

const Spiral = () => {
  return (
    <Container>
      <FirstChild />
      <Dot />
    </Container>
  );
};

export default Spiral;
