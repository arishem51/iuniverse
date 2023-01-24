import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { sortEmptyElement } from "../../helpers";
import { Type } from "../../types";
import { FlexContainer } from "../Base";

const SidebarWrapper = styled(FlexContainer)`
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
  position: relative;
  z-index: 2;
  color: var(--color-white);
  font-weight: 700;
  font-size: 18px;
  text-transform: capitalize;
  letter-spacing: 0.5px;
`;

const SidebarLink = styled(Link)`
  text-decoration: none;
`;

const Items: Type[] = [
  "all",
  "shape",
  "button",
  "loader",
  "card",
  "toogle",
  "checkboxe",
  "input",
  "animal",
  "text",
  "3d Shape",
];

export default function Sidebar() {
  const { id } = useParams();
  const SidebarElement = sortEmptyElement(Items, [
    "toogle",
    "checkboxe",
    "input",
  ]);
  const renderItem = () => {
    return SidebarElement.map((item) => {
      const styles = {
        "--color-bg": id === item ? "var(--color-lightDark)" : "transparent",
      } as React.CSSProperties;

      return (
        <SidebarLink to={`/${item}`} key={item}>
          <SidebarItem style={styles}>
            <SidebarItemText>
              {item === "all" ? item : item + "s"}
            </SidebarItemText>
          </SidebarItem>
        </SidebarLink>
      );
    });
  };
  return <SidebarWrapper column>{renderItem()}</SidebarWrapper>;
}
