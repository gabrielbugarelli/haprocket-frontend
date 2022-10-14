import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { FeedbackTypeEnum } from '../../../domain/enums/FeedbackTypeEnum';

type Props = {
  setFeedbackType(feedbackType: string): void;
}

export const FeedbackFilter = ({ setFeedbackType }: Props) => {

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="filled" htmlFor="uncontrolled-native">
          Filter by: All
        </InputLabel>
        <NativeSelect
          defaultValue={FeedbackTypeEnum['POSITIVE']}
          inputProps={{
            name: 'feedbackType',
            id: 'uncontrolled-native',
          }}

          // onChange={() => console.log('oi')}
          onChange={(e) => setFeedbackType(e.target.value.toString())}
        >
          <option value={FeedbackTypeEnum['POSITIVE']}>Positive</option>
          <option value={FeedbackTypeEnum['NEGATIVE']}>Negative</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
