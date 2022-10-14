import { Box, Breadcrumbs, useTheme } from "@mui/material"
import { Link } from "react-router-dom";

export const Header = () => {
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'left' }}>
      <Breadcrumbs aria-label="breadcrumb" separator="›">
        <Link to="/" style={{ color: theme.palette.primary.main }}>
          Feedback
        </Link>
        <Link to="feedback-detail" style={{ color: theme.palette.primary.main }}>
          Feedback Details
        </Link>
      </Breadcrumbs>

      <p>You can send and view the feedbacks that you've received.</p>
    </Box>
  );
}