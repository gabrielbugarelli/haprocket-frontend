import { useState } from "react";
import { FeedbackTypeEnum } from "../../domain/enums/FeedbackTypeEnum";
import { FeedbackFilter } from "./FeedbackFilter";
import { FeedbackButton, FilterContainer } from "./styles";

export const Feedback = () => {
  const [feedbackType, setFeedbackType] = useState<string>(FeedbackTypeEnum['POSITIVE']);

  return (
    <div>
      <FeedbackButton
        variant="contained" size="small"
        onClick={() => console.log(feedbackType)}
      >
        New Feedback
      </FeedbackButton>

      <FilterContainer>
        <hr />
        <FeedbackFilter setFeedbackType={setFeedbackType} />
      </FilterContainer>
    </div>
  );
}

