import { Box, Button, Select, styled, TextareaAutosize, TextField } from '@mui/material';

export const Form = styled(Box)(() => `
  background-color: red;
  height: 65vh;
  background-color: var(--gray-50);
  border-radius: 3px;
  margin-top: 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`);

export const Container = styled(Box)(() => `
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`);

export const Dropdown = styled(Select)(() => `
  margin-top: 1rem;
  height: 2.5rem;
  width: 100%;

  background-color: #F7FAFC
`);

export const TextArea = styled('textarea')(() => `
  margin-top: 1rem;
  height: 8rem;
  padding: 0;
  width: 100%;
  resize: none;

  padding: 0.5rem;
  border-color: #cbd5e1;
  border-radius: 3px;
`);

export const ButtonContainer = styled(Box)(() => `
  display: flex;
  width: 60%;
  justify-content: space-between;

  margin-top: 1.7rem;
`);

export const ActionButtons = styled(Button)(() => `
  width: 10rem;

  @media(max-width: 720px) {
    width: 6rem;
  }
`);