import React from "react";
import styled from "styled-components";
import AnimationLayout from "../../components/AnimationLayout";
import ListComponent from "../../components/ListComponent";
import Sidebar from "../../components/Sidebar";
import { MEDIAQUERY } from "../../constants";

const Flex = styled(AnimationLayout)`
  display: flex;
  flex: 1;
  padding: var(--space-s) 0;
  background: var(--color-dark);
  @media (${MEDIAQUERY.lessThanTablet}) {
    flex-direction: column;
  }
`;

export default function MainContent() {
  return (
    <Flex>
      <Sidebar />
      <ListComponent />
    </Flex>
  );
}
