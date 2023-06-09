import { useEffect, useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 200px;
  height: 300px;
  box-shadow: 0 1px 5px #00000099;

  border-radius: 10px;
  background-image: url(https://images.unsplash.com/photo-1557672199-6e8c8b2b8fff?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80);
  background-size: cover;

  transition: transform, box-shadow;
  transition-duration: 0.3s;
  transition-timing-function: linear;

  position: relative;

  perspective: 1000px;
`;

const Text = styled.span`
  --fs: 0.95rem;
  position: absolute;
  top: var(--fs);
  right: var(--fs);
  font-size: var(--fs);
  font-weight: bold;
`;

export default function Card3DHoverEffect3D() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cardEl = cardRef?.current as HTMLDivElement;
    const { x, y, width, height } = cardEl.getBoundingClientRect();
    const scaleNum = 1.15;
    const rotateZ = 0;
    const CONSTANT = 80;

    const center = {
      x: width / 2,
      y: height / 2,
    };

    const totalCenter = center.x + center.y;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      const leftX = clientX - x;
      const topY = clientY - y;

      const distanceX = Math.abs(leftX - center.x);
      const distanceY = Math.abs(topY - center.y);

      const totalDistance = distanceX + distanceY;
      const degree = (totalDistance / totalCenter) * 12 + 5 + "deg";

      const rotateX = (topY - center.y) / CONSTANT;
      const rotateY = ((leftX - center.x) / CONSTANT) * -1;

      const scaleTransform = `scale3d(${scaleNum},${scaleNum},${scaleNum})`;
      const rotateTransform = `rotate3d(${rotateX},${rotateY},${rotateZ},${degree})`;

      cardEl.style.transform = `
        ${scaleTransform}
        ${rotateTransform}
      `;
    };

    const handleMouseEnter = () => {
      cardEl.addEventListener("mousemove", handleMouseMove);
    };

    const handleMouseLeave = () => {
      cardEl.style.transform = "";
      cardEl.removeEventListener("mousemove", handleMouseMove);
    };

    cardEl.addEventListener("mouseenter", handleMouseEnter);
    cardEl.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      cardEl.removeEventListener("mouseenter", handleMouseEnter);
      cardEl.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <Container ref={cardRef}>
      <Text>3D Card</Text>
    </Container>
  );
}
