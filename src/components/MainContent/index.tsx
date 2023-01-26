import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { MEDIAQUERY } from "../../constants";
import { checkRouteId } from "../../helpers";
import { FlexContainer } from "../Base";
import ListComponent from "../ListComponent";
import Loading from "../ListComponent/Loading";
import Sidebar from "../Sidebar";

const Flex = styled(FlexContainer)`
  flex: 1;
  @media (${MEDIAQUERY.lessThanTablet}) {
    flex-direction: column;
  }
  padding: var(--space-s) 0;
  background: var(--color-dark);
`;

export default function MainContent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    checkRouteId(id, () => navigate("/all", { replace: true }));
    setLoading(false);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Flex>
      <Sidebar />
      <ListComponent />
    </Flex>
  );
}
