import { InputLabel, MenuItem } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CreateFeedbackDTO } from '../../domain/dtos/CreateFeedbackDTO';
import { User } from '../../domain/entities/User';
import { FeedbackTypeEnum } from '../../domain/enums/FeedbackTypeEnum';
import { api } from '../../service/api';
import { useVerifyBreadcrumbs } from '../../shared/hooks/useBreadcrumb';
import { ButtonContainer, Container, Dropdown, Form, TextArea, ActionButtons } from './styles';

export const FeedbackDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setIsActive } = useVerifyBreadcrumbs();

  const [users, setUsers] = useState<User[]>([]);
  const [userSelected, setUserSelected] = useState<User>({} as User);
  const [feedbackType, setFeedbackType] = useState<FeedbackTypeEnum>(FeedbackTypeEnum['POSITIVE']);
  const [feedbackDescription, setFeedbackDescription] = useState<string>('');

  async function getAllUsers() {
    const { data } = await api.get('/users');
    setUsers(data);
  }

  async function handleCreateFeedback() {
    let payload: CreateFeedbackDTO = {
      userId: userSelected.id,
      userName: userSelected.name,
      feedbackType: FeedbackTypeEnum[feedbackType],
      description: feedbackDescription,
    }

    await api.post(`/feedbacks/create/${JSON.stringify(payload)}`);
  }

  function handleVeriryBreadcrumbs() {
    if (location.pathname === '/feedback-detail') {
      setIsActive(true);
    }
  }

  useEffect(() => {
    getAllUsers();
    handleVeriryBreadcrumbs();
  }, []);

  return (
    <Form component="form">
      <Container>
        <InputLabel sx={{ alignSelf: 'start' }} size='small'>How do you want to send the feedback</InputLabel>
        <Dropdown
          value={userSelected.name}
          defaultValue
        >
          {users.map(user => {
            return (
              <MenuItem onClick={() => setUserSelected(user)} value={user.id} key={user.id}>
                {user.name}
              </MenuItem>
            )
          })}
        </Dropdown>
      </Container>

      <Container>
        <InputLabel sx={{ alignSelf: 'start' }} size='small'>Feedback Type</InputLabel>
        <Dropdown
          value={userSelected.name}
          defaultValue
        >
          <MenuItem onClick={() => setFeedbackType(FeedbackTypeEnum['POSITIVE'])} value='POSITIVE'>
            Positive
          </MenuItem>

          <MenuItem onChange={() => setFeedbackType(FeedbackTypeEnum['NEGATIVE'])} value='NEGATIVE'>
            Negative
          </MenuItem>
        </Dropdown>
      </Container>

      <Container>
        <InputLabel sx={{ alignSelf: 'start' }} size='small'>Description</InputLabel>
        <TextArea
          placeholder="Description..."
          onChange={(event) => setFeedbackDescription(event.target.value)}
        />
      </Container>

      <ButtonContainer>
        <ActionButtons
          size='small' variant='contained'
          color='secondary'
          onClick={() => navigate("/")}
        >
          Back
        </ActionButtons>

        <ActionButtons
          size='small' variant='contained'
          onClick={handleCreateFeedback}
        >
          Save
        </ActionButtons>
      </ButtonContainer>
    </Form>
  );
}
