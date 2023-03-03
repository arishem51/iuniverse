import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MEDIAQUERY } from "../../constants";
import { useElements } from "../../Context/ElementsContext";
import { RouteItem } from "../../types";
import { ButtonContainer, FlexContainer } from "../Base";

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  width: 60%;
  margin: 1rem auto;

  @media (${MEDIAQUERY.lessThanTablet}) {
    width: 80%;
  }
`;

const Heading = styled.h2`
  color: var(--color-white);
  font-size: var(--step-2);
  text-transform: capitalize;
  letter-spacing: 2px;
  text-align: left;
`;

const Child = styled(FlexContainer)`
  flex: 1;

  min-height: 250px;
  padding: 3rem 0;

  background-color: var(--color-lightDark);
  border-radius: 1rem;
  @media (${MEDIAQUERY.lessThanTablet}) {
    flex: 200px;
  }
`;
const List = styled(FlexContainer)`
  gap: 2rem;
  flex-wrap: wrap;

  margin: 2rem 0;
`;

const Button = styled(ButtonContainer)`
  padding: 12px 24px;
  background: var(--color-lightDark);
  border-radius: 30px;

  color: var(--color-white);
  font-weight: 700;
`;

const NavLink = styled(Link)`
  all: unset;
  align-self: center;
`;

const TypeText = styled.span`
  text-transform: capitalize;
`;

type Props = {
  type: RouteItem["urlPath"];
};

export default function PreviewComponent({ type }: Props) {
  const { previewElements } = useElements({ type });

  if (type === "all" || previewElements.length === 0) {
    return null;
  }

  function renderItem() {
    return previewElements.map((item, index) => (
      <Child key={index} center>
        {item.component}
      </Child>
    ));
  }

  return (
    <Wrapper
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Heading>{type}s</Heading>
      <List>{renderItem()}</List>
      <NavLink to={`/${type}`}>
        <Button>
          See all <TypeText>{type}s</TypeText>
        </Button>
      </NavLink>
    </Wrapper>
  );
}
