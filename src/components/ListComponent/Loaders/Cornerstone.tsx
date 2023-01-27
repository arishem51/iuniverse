import styled, { keyframes } from "styled-components";

// Made by @Cornerstone-04 --> https://uiverse.io/Cornerstone-04/chilly-fish-82

const animate = keyframes`
   /* 0%{
    translate: 0 0 ;
   }25%{
    scale:1;
    translate: 30px 0 ;
   }50%{
    translate: 30px 0 ;
    scale: .5;
   }75%{
    translate: 0 0 ;
    scale: .5;
   }
   100%{
    scale:1
   } */
   0%,75%{
    translate: 0 0;
   }25%,100%{
    scale:1
   }25%,50%{
    translate: 30px 0;
   }50%,75%{
    scale:.5
   }
`;

const Wrapper = styled.div`
  position: relative;
  isolation: isolate;
  width: 80px;
  height: 50px;
  ::after,
  ::before {
    content: "";
    position: absolute;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    mix-blend-mode: difference;
    animation: ${animate} 2s infinite ease-in-out;
  }
  ::after {
    background: #75e2ff;
  }
  ::before {
    background: #ff8496;
    animation-delay: 1s;
  }
`;

export default function Component() {
  return <Wrapper />;
}
