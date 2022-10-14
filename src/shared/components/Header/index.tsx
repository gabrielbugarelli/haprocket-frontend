import { Breadcrumbs, useTheme } from "@mui/material"
import { Link } from "react-router-dom";

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const Header = () => {
  const theme = useTheme();

  return (
    <Breadcrumbs aria-label="breadcrumb" separator={<ArrowForwardIosIcon fontSize="small" />}>
      <Link to="/" style={{ color: theme.palette.primary.main }}>
        Feedback
      </Link>
      <Link to="feedback-detail" style={{ color: theme.palette.primary.main }}>
        Feedback Details
      </Link>
    </Breadcrumbs>
  );
}