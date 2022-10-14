import { Button, styled } from '@mui/material';

export const FeedbackButton = styled(Button)(() => `
  margin: 1rem 0 0 0;
`)

export const FilterContainer = styled('div')(() => `
  width: 100%;
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  gap: 1rem;

  hr {
    width: 100%;
    height: 2px;
    background-color: var(--gray-900);
  }
`);