import { FeedbackTypeEnum } from "../enums/FeedbackTypeEnum";

export class Feedback {
  description?: string;
  feedbackType?: FeedbackTypeEnum;
  userId?: string;
  userName?: string;
  id?: string;
  createdAt?: Date;
}