import { FeedbackFilter } from "./FeedbackFilter";
import { FeedbackTableData } from "./FeedbackTableData";
import { FeedbackButton, FilterContainer } from "./styles";

export const Feedback = () => {
  return (
    <div>
      <FeedbackButton
        variant="contained" size="small"
        onClick={() => { }}
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

