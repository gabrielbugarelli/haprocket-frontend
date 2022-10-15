import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { BootstrapInput } from './styles';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { api } from '../../../service/api';
import { useFeedbacks } from '../../hooks/useFeedbacks';

type Props = {
  id: string | undefined;
}

export function MenuTools({ id }: Props) {
  const navigation = useNavigate();
  const [action, setAction] = useState<string>('');

  const { listAllFeedbacks } = useFeedbacks();

  const handleChange = async (event: { target: { value: string } }) => {
    if (event.target.value === "View") {
      navigation("/feedback-detail", {
        state: id
      })
    }
    if (event.target.value === "Delete") {
      await handleDeleteFeedback(id);
    }
    return;
  };

  async function handleDeleteFeedback(id: string | undefined) {
    if (!id) {
      return;
    }

    await api.delete(`/feedbacks/${id}`);
    await listAllFeedbacks();

    toast('Feedback deleted!');
  }

  return (
    <div>
      <FormControl>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={action}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <MenuItem value="View">View</MenuItem>
          <MenuItem value="Delete">Delete</MenuItem>
        </Select>
      </FormControl>

    </div >
  );
}
