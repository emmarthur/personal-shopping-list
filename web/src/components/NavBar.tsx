import styled from "styled-components";

import Button from "@/components/Button";

const NavBarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffedd5;
  border-bottom: 1px solid #fed7aa;
  min-height: 3.25rem;
`;

const Title = styled.h2`
  text-align: center;
  flex: 1;
  margin: 0;
  font-size: 1.1rem;
  color: #7c2d12;
`;

const NavBarButton = styled(Button)`
  margin: 0.5rem 1rem;
  font-size: 0.85rem;
`;

type NavBarProps = {
  goBack?: () => void;
  title: string;
  openForm?: () => void;
};

export default function NavBar({ goBack, title, openForm }: NavBarProps) {
  return (
    <NavBarWrapper>
      {goBack ? (
        <NavBarButton type="button" onClick={goBack}>&lt; Go back</NavBarButton>
      ) : (
        <span aria-hidden="true" style={{ width: "6.5rem" }} />
      )}
      <Title>{title}</Title>
      {openForm ? (
        <NavBarButton type="button" onClick={openForm}>+ Add item</NavBarButton>
      ) : (
        <span aria-hidden="true" style={{ width: "6.5rem" }} />
      )}
    </NavBarWrapper>
  );
}
