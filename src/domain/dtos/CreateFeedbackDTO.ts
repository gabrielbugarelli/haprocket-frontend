import { FeedbackTypeEnum } from "../enums/FeedbackTypeEnum";

export class CreateFeedbackDTO {
  userId?: string;
  userName?: string;
  description?: string;
  feedbackType?: FeedbackTypeEnum;
}