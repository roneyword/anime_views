import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: calc(1480px + 64px);
  height: auto;
  margin: 0 auto;
  padding: 0px 32px;

  @media (max-width: 425px) {
    max-width: calc(1480px + 32px);
    padding: 0px 16px;
  }
`;