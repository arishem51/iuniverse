import styled from "styled-components";
import { FlexContainer } from "../../Base";

// Made by Gayane --> https://codepen.io/gayane-gasparyan/pen/wvxewXO

const HoverWrapper = styled.div`
  position: relative;
  transition: all 0.5s;
  ::after {
    content: "";
    position: absolute;
    inset: 0;
    opacity: 0;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 80%,
      rgba(0, 0, 0, 1) 100%
    );
    transition: opacity 0.5s;
  }
  ::before {
    content: "";
    position: absolute;
    inset: 0;
    opacity: 0;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0) 60%,
      rgba(0, 0, 0, 1) 100%
    );
    transition: opacity 0.5s;
  }
`;

const TextImg = styled.img`
  position: absolute;
  bottom: 0;
  width: 65%;
  transition: translate 0.5s;
`;

const VisibleImg = styled.img`
  position: absolute;
  transition: translate 0.5s, opacity 0.7s;
  opacity: 0;
`;

const Wrapper = styled(FlexContainer)`
  position: relative;
  height: 300px;
  width: calc(300px / 1.5);
  cursor: pointer;
  perspective: 900px;
  transform-style: preserve-3d;
  :hover {
    ${HoverWrapper} {
      transform: rotateX(25deg);
      box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
      ::after,
      ::before {
        opacity: 1;
      }
    }
    ${TextImg} {
      translate: 0 -30px 100px;
    }
    ${VisibleImg} {
      translate: 0 -60px 99px;
      opacity: 1;
    }
  }
`;

type Props = {
  visibleImg?: string;
  backgroungImg?: string;
  textImg?: string;
};

export default function Card3DHoverEffect({
  visibleImg = "https://ggayane.github.io/css-experiments/cards/force_mage-character.webp",
  backgroungImg = "https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg",
  textImg = "https://ggayane.github.io/css-experiments/cards/force_mage-title.png",
}: Props) {
  return (
    <Wrapper center>
      <HoverWrapper>
        <img src={backgroungImg} />
      </HoverWrapper>
      <TextImg src={textImg} />
      <VisibleImg src={visibleImg} />
    </Wrapper>
  );
}
