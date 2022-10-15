import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useVerifyBreadcrumbs } from "../../shared/hooks/useBreadcrumb";
import { FeedbackFilter } from "./FeedbackFilter";
import { FeedbackTableData } from "./FeedbackTableData";
import { FeedbackButton, FilterContainer } from "./styles";

export const Feedback = () => {
  const { setIsActive } = useVerifyBreadcrumbs();
  const navigate = useNavigate();
  const location = useLocation();

  function handleNavigate() {
    navigate('/feedback-detail')
    setIsActive(true);
  }

  function handleVerifyRoute() {
    if (location.pathname === "/") {
      setIsActive(false);
    }
  }

  useEffect(() => {
    handleVerifyRoute()
  }, []);

  return (
    <div>
      <FeedbackButton
        variant="contained" size="small"
        onClick={handleNavigate}
      >
        New Feedback
      </FeedbackButton>

      <FilterContainer>
        <hr />
        <FeedbackFilter />
      </FilterContainer>

      <FeedbackTableData />
    </div>
  );
}

