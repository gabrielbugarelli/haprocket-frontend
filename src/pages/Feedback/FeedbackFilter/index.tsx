import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { FeedbackTypeEnum } from '../../../domain/enums/FeedbackTypeEnum';
import { api } from '../../../service/api';
import { Feedback } from '../../../domain/entities/Feedback';
import { useFeedbacks } from '../../../shared/hooks/useFeedbacks';

export const FeedbackFilter = () => {
  const { setFeedbacks } = useFeedbacks();

  async function listAllFeedbacksByType(feedbackType: string): Promise<void> {
    if (feedbackType === "ALL") {
      const response: Feedback[] = await (await api.get('/feedbacks')).data;
      setFeedbacks(response);
    }

    const response: Feedback[] = await (await api.get(`/feedbacks/feedback-type/${feedbackType.toUpperCase()}`)).data;
    setFeedbacks(response);
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="filled" htmlFor="uncontrolled-native">
          Filter by:
        </InputLabel>
        <NativeSelect
          defaultValue={FeedbackTypeEnum['POSITIVE']}
          inputProps={{
            name: 'feedbackType',
            id: 'uncontrolled-native',
          }}
          onChange={(e) => listAllFeedbacksByType(e.target.value)}
        >
          <option value={'ALL'}>All</option>
          <option value={FeedbackTypeEnum['POSITIVE']}>Positive</option>
          <option value={FeedbackTypeEnum['NEGATIVE']}>Negative</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
