import styled from 'styled-components';

export const StyledSidebar = styled.aside`
  background-color: #ffffff;
  border-radius: 12px;
  border: 1px solid #eaebed;

  @media (max-width: 800px) {
    margin: 0 15%;
  }

  @media (max-width: 650px) {
    margin: 0 10%;
  }

  @media (max-width: 650px) {
    margin: 0 5%;
  }

  @media (max-width: 500px) {
    margin: 0;
  }
`;

export const StyledContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;
