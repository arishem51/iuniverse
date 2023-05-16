import { CSSProperties, PropsWithChildren } from "react";
import styled, { keyframes } from "styled-components";

const breatheAnimation = keyframes`
    0%{
        animation-timing-function: ease-out;
    }100%{
        animation-timing-function: ease-in-out;
        transform: translateY(-4px) scale(1.05);
        text-shadow: 0px 0px 25px var(--color);
    }
`;

const Span = styled.span`
  --color: white;
  display: inline-block;
  font-size: 32px;
  color: var(--color);
  letter-spacing: 0.25em;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  white-space: break-spaces;
  font-weight: 200;

  animation: ${breatheAnimation} 0.75s infinite alternate;
  animation-delay: calc(var(--index) * 0.12s);
`;

const Breathe = ({ children }: PropsWithChildren) => {
  const renderItem = () => {
    return children
      ?.toString()
      .split("")
      .map((item, index) => {
        const style = {
          "--index": index,
        } as CSSProperties;
        return (
          <Span key={item} style={style}>
            {item}
          </Span>
        );
      });
  };
  return <div>{renderItem()}</div>;
};

export default Breathe;
