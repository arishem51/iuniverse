import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { MEDIAQUERY } from "../../constant";
import { RouteItem } from "../../types";
import { FlexContainer } from "@components";

const SidebarWrapper = styled(FlexContainer)`
  position: sticky;
  top: 1rem;

  gap: 0.5rem;
  height: 100%;
  padding: 1rem;

  background: var(--color-dark);

  overflow-y: scroll;

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
  user-select: none;

  text-overflow: ellipsis;
  overflow: hidden;
`;

const SidebarLink = styled(Link)`
  text-decoration: none;
`;

const SidebarOverlay = styled(motion.div)`
  position: absolute;
  inset: 0;
  border-radius: 30px;
  background: var(--color-lightDark);
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
    urlPath: "toggle",
  },
  {
    name: "Shapes",
    urlPath: "shape",
  },
  {
    name: "Sliders",
    urlPath: "slider",
  },
  {
    name: "Images",
    urlPath: "image",
  },
  {
    name: "Patterns",
    urlPath: "pattern",
  },
  {
    name: "Framer Motion",
    urlPath: "framer",
  },
];

export default function Sidebar() {
  const { id } = useParams();

  const renderItem = () => {
    return SidebarRouteItem.map((item) => {
      return (
        <SidebarLink to={`/${item.urlPath}`} key={item.name}>
          <SidebarItem>
            <SidebarItemText>{item.name}</SidebarItemText>
            {item.urlPath === id && <SidebarOverlay layoutId="overlay" />}
          </SidebarItem>
        </SidebarLink>
      );
    });
  };
  return <SidebarWrapper column>{renderItem()}</SidebarWrapper>;
}
