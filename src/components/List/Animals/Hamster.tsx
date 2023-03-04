import React from "react";
import styled, { keyframes } from "styled-components";

// Made by @Nawsome --> https://uiverse.io/Nawsome/wet-mayfly-23

const Wrapper = styled.div`
  --legLeft: linear-gradient(#fce6cf 80%, #fbb6b6 80%);
  --legRight: linear-gradient(#facc9e 80%, #f98686 80%);

  width: 110px;
  height: 60px;
  position: relative;
  transform-style: preserve-3d;
`;

const BodyAnim = keyframes`
    0%,25%,50%,75%,100% {
        rotate: 0;
    } 
    12.5%,37.5%,62.5%,87.5% {
        rotate: -2deg;
    }
`;

const Body = styled.div`
  position: absolute;
  top: -2px;
  left: 38px;
  width: 88px;
  height: 54px;
  background-color: #fce6cf;
  border-radius: 50% 30% 50% 30% / 15% 60% 40% 40%;
  box-shadow: 1px 12px 0 #f48c25 inset, 2px -6px 0 #facc9e inset;
  z-index: 1;
  animation: ${BodyAnim} 1s infinite linear;
`;

const HeadAnim = keyframes`
    0%,25%,50%,75%,100% {
        rotate: 0;
    } 
    12.5%,37.5%,62.5%,87.5% {
        rotate: 2deg;
    }
`;

const Head = styled.div`
  position: absolute;
  width: 48px;
  height: 44px;
  background: #f48c25;
  border-radius: 70% 30% 0% 100% / 40% 25% 25% 60%;
  box-shadow: 0 -5px 0 0 #facc9e inset, 0 -30px 0 #fce6cf inset;
  z-index: 2;
  transform-origin: 100% 50%;
  animation: ${HeadAnim} 0.5s linear infinite;
`;

const EarAnim = keyframes`
    0%,25%,50%,75%,100%{
        rotate: 0;
    } 
    12.5%, 37.5%,62.5%,87.5% {
        rotate: 12deg;
    }
`;

const Ear = styled.div`
  position: absolute;
  top: -4px;
  left: 40px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #fbb6b6;
  box-shadow: -4px 0 0 0 #f48c25 inset;
  transform-origin: 50% 75%;
  animation: ${EarAnim} 1s ease-in-out infinite;
`;

const EyeAnim = keyframes`
  0%,
  90%,
  100% {
    scale: 1 1;
  }
  95%{
    scale: 1 0;
  }
`;

const Eye = styled.div`
  position: absolute;
  top: 7px;
  left: 24px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--color-black);
  animation: ${EyeAnim} 1s linear infinite;
`;

const Nose = styled.div`
  position: absolute;
  top: 15px;
  width: 5px;
  height: 5px;
  background-color: #f98686;
  border-radius: 0% 100% 100% 0% / 50% 50% 50% 50%;
`;

const LegFront = styled.div`
  position: absolute;
  top: 42px;
  left: 50px;
  width: 20px;
  height: 24px;
  transform-origin: top center;
  clip-path: polygon(20% 0, 80% 0, 70% 80%, 75% 100%, 20% 100%, 40% 80%);
`;

const FrontRightAnim = keyframes`
    0%,25%,50%,75%,100%{
        rotate: 50deg;
    } 
    12.5%, 37.5%,62.5%,87.5% {
        rotate: -30deg;
    }
`;

const LegFrontRight = styled(LegFront)`
  background: var(--legRight);
  animation: ${FrontRightAnim} 1s linear infinite;
`;

const FrontLeftAnim = keyframes`
    0%,25%,50%,75%,100%{
        rotate: -30deg;
    } 
    12.5%, 37.5%,62.5%,87.5% {
        rotate: 50deg;
    }
`;

const LegFrontLeft = styled(LegFront)`
  background: var(--legLeft);
  translate: 0 0 1px;
  animation: ${FrontLeftAnim} 1s linear infinite;
`;

const LegBack = styled.div`
  position: absolute;
  top: 30px;
  right: -5px;
  rotate: -30deg;
  width: 28px;
  height: 32px;
  clip-path: polygon(20% 0, 80% 0, 70% 80%, 75% 100%, 20% 100%, 40% 80%);
`;

const BackRightAnim = keyframes`
    0%,25%,50%,75%,100%{
        rotate: -60deg;
    } 
    12.5%, 37.5%,62.5%,87.5% {
        rotate: 20deg;
    }
`;

const LegBackRight = styled(LegBack)`
  background: var(--legRight);
  animation: ${BackRightAnim} 1s linear infinite;
`;

const BackLeftAnim = keyframes`
    0%,25%,50%,75%,100%{
        rotate: 20deg;
    } 
    12.5%, 37.5%,62.5%,87.5% {
        rotate: -60deg;
    }
`;

const LegBackLeft = styled(LegBack)`
  background: var(--legLeft);
  translate: 0 0 1px;
  animation: ${BackLeftAnim} 1s linear infinite;
`;

const TailAnim = keyframes`
    0%,25%,50%,75%,100%{
        rotate: 30deg;
    } 
    12.5%, 37.5%,62.5%,87.5% {
        rotate: 10deg;
    }  
`;

const Tail = styled.div`
  position: absolute;
  top: 28px;
  right: -24px;
  width: 20px;
  height: 12px;
  border-radius: 30% 70% 40% 60% / 50% 50% 50% 50%;
  background: hsl(0, 90%, 85%);
  transform-origin: 0 50%;
  box-shadow: 0 -6px 0 0 hsl(0deg 90% 75%) inset;
  animation: ${TailAnim} 1s linear infinite;
`;

export function Hamster() {
  return (
    <Wrapper>
      <Body />
      <Head>
        <Ear />
        <Eye />
        <Nose />
      </Head>
      <LegFrontRight />
      <LegFrontLeft />
      <LegBackRight />
      <LegBackLeft />
      <Tail />
    </Wrapper>
  );
}
