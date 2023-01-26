import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { MEDIAQUERY } from "../../constants";
import { RouteItem } from "../../types";
import { FlexContainer } from "../Base";

const SidebarWrapper = styled(FlexContainer)`
  position: relative;
  padding: 1rem;
  background: var(--color-dark);
  gap: 0.5rem;
  @media (${MEDIAQUERY.lessThanTablet}) {
    width: 100%;
    flex-wrap: nowrap;
    flex-direction: row;
    overflow-x: scroll;
    gap: 2rem;
    padding: 1rem 2rem;
  }
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
  @media (${MEDIAQUERY.lessThanTablet}) {
    width: 150px;
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SidebarLink = styled(Link)`
  text-decoration: none;
`;

const SidebarRouteItem: RouteItem[] = [
  { name: "all", urlPath: "all" },
  {
    name: "Inputs",
    urlPath: "input",
  },
  {
    name: "Buttons",
    urlPath: "button",
  },
  {
    name: "Animals",
    urlPath: "animal",
  },
  {
    name: "Checkboxes",
    urlPath: "checkbox",
  },
  {
    name: "3D Shapes",
    urlPath: "3dShape",
  },
  {
    name: "Cards",
    urlPath: "card",
  },
  {
    name: "Loaders",
    urlPath: "loader",
  },
  {
    name: "Text Animation",
    urlPath: "text",
  },
  {
    name: "Toggle Switches",
    urlPath: "toogle",
  },
  {
    name: "Shapes",
    urlPath: "shape",
  },
];

export default function Sidebar() {
  const { id } = useParams();
  const renderItem = () => {
    return SidebarRouteItem.map((item) => {
      const styles = {
        "--color-bg":
          id === item.urlPath ? "var(--color-lightDark)" : "transparent",
      } as React.CSSProperties;

      return (
        <SidebarLink to={`/${item.urlPath}`} key={item.name}>
          <SidebarItem style={styles}>
            <SidebarItemText>{item.name}</SidebarItemText>
          </SidebarItem>
        </SidebarLink>
      );
    });
  };
  return <SidebarWrapper column>{renderItem()}</SidebarWrapper>;
}
