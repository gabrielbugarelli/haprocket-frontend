import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Feedback } from "../../domain/entities/Feedback";
import { api } from "../../service/api";

type FeedbacksProviderProps = {
  children: ReactNode;
}

type FeedbacksContextData = {
  feedbacks: Feedback[];
  setFeedbacks: React.Dispatch<React.SetStateAction<Feedback[]>>;
  listAllFeedbacks?: () => Promise<void>;
}

const FeedbacksContext = createContext<FeedbacksContextData>({} as FeedbacksContextData);

export const FeedbacksProvider = ({ children }: FeedbacksProviderProps) => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  async function listAllFeedbacks() {
    const response: Feedback[] = await (await api.get('/feedbacks')).data;
    setFeedbacks(response);
  }

  useEffect(() => {
    listAllFeedbacks();
  }, []);

  return (
    <FeedbacksContext.Provider value={{ feedbacks, setFeedbacks }}>
      {children}
    </FeedbacksContext.Provider>
  );
}

export const useFeedbacks = () => {
  const context = useContext(FeedbacksContext);
  return context;
}
