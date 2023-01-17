import styled from "styled-components";

const Wrapper = styled.button`
  all: unset;
  padding: 12px 24px;
  background-color: var(--color-white);
  color: var(--color-dark);
  border-radius: 30px;
  cursor: pointer;
  user-select: none;
`;

type Props = {} & React.HTMLAttributes<HTMLButtonElement>;

export default function Button(props: Props) {
  return <Wrapper {...props} />;
}
