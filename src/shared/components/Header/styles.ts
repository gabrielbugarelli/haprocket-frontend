import { Box, styled } from '@mui/material';

export const BoxContainer = styled(Box)(() => `
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 1rem;

  width: 100%;


  label {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;

    font-weight: bold;
  }
`)