import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: var(--color-dark);
  gap: 0.5rem;
`;

const SidebarItem = styled.div`
  position: relative;
  width: 200px;
  padding: 0.7rem 1.5rem;
  cursor: pointer;
  ::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 30px;
    background: var(--color-bg);
  }
`;

const SidebarItemText = styled.h6`
  all: unset;
  position: relative;
  z-index: 2;
  color: var(--color-white);
  font-weight: 700;
  font-size: 18px;
  text-transform: capitalize;
  letter-spacing: 0.5px;
`;

const SidebarLink = styled(Link)`
  all: unset;
`;

type Type = "all" | "shape";

const Items: Type[] = ["all", "shape"];

export default function Sidebar() {
  const { id } = useParams();
  const renderItem = () => {
    return Items.map((item) => {
      const styles = {
        "--color-bg": id === item ? "var(--color-lightDark)" : "transparent",
      } as React.CSSProperties;

      return (
        <SidebarLink to={`/${item}`}>
          <SidebarItem key={item} style={styles}>
            <SidebarItemText>{item}</SidebarItemText>
          </SidebarItem>
        </SidebarLink>
      );
    });
  };
  return <SidebarWrapper>{renderItem()}</SidebarWrapper>;
}
