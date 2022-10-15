import { Box, Breadcrumbs, useTheme } from "@mui/material"
import { Link } from "react-router-dom";
import { useVerifyBreadcrumbs } from "../../hooks/useBreadcrumb";
import HomeIcon from '@mui/icons-material/Home';
import { BoxContainer } from "./styles";

export const Header = () => {
  const theme = useTheme();
  const { isActive } = useVerifyBreadcrumbs();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'left' }}>
      <BoxContainer>
        <label>
          <HomeIcon />
          {`Feedback >`}
        </label>

        <Breadcrumbs aria-label="breadcrumb" separator="›">
          <Link to="/" style={{ color: theme.palette.primary.main }}>
            Feedback
          </Link>

          {
            isActive &&
            <Link to="feedback-detail" style={{ color: theme.palette.primary.main }}>
              Feedback Details
            </Link>
          }
        </Breadcrumbs>

      </BoxContainer>

      <p>You can send and view the feedbacks that you've received.</p>
    </Box>
  )


}