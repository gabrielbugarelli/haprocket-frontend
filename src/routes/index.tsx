import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Feedback } from "../pages/Feedback";
import { FeedbackDetails } from "../pages/FeedbackDetails";
import { Layout } from "../pages/Layout";
import { FeedbacksProvider } from "../shared/hooks/useFeedbacks";

export const Router = () => {
  return (
    <BrowserRouter>
      <FeedbacksProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Feedback />} />
            <Route path="/feedback-detail" element={<FeedbackDetails />} />
          </Route>
        </Routes>
      </FeedbacksProvider>
    </BrowserRouter>
  )
}