import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { dateFormat } from '../../../shared/utils/dateFormat';
import { useFeedbacks } from '../../../shared/hooks/useFeedbacks';

export const FeedbackTableData = () => {
  const { feedbacks } = useFeedbacks();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>Made with ❤️ by <a href='https://github.com/gabrielbugarelli' target='_blank'> Gabriel F. Mendes </a></caption>
        <TableHead>
          <TableRow>
            <TableCell>User</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Feedback Type</TableCell>
            <TableCell>Created At</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {feedbacks.map((feedback) => (
            <TableRow key={feedback.id}>
              <TableCell>{feedback.userName}</TableCell>
              <TableCell>{feedback.description}</TableCell>
              <TableCell>{feedback.feedbackType}</TableCell>

              <TableCell>
                {dateFormat(feedback.createdAt!!!)}
                <span>clique</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}