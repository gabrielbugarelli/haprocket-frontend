import { styled } from '@mui/material';

export const Container = styled('main')(() => `
  display: flex;
  flex-direction: column;

  align-items: center; 
  justify-content: center;

  p {
    font-size: 20px;
    font-weight: bold;
    color: var(--gray--900);
  }

  img {
    width: 250px;
    margin: 3rem 0 1rem 0;
  }
`);