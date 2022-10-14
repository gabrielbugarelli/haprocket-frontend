import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Feedback } from "../pages/Feedback";
import { FeedbackDetails } from "../pages/FeedbackDetails";
import { Layout } from "../pages/Layout";
import { BreadcrumbProvider } from "../shared/hooks/useBreadcrumb";
import { FeedbacksProvider } from "../shared/hooks/useFeedbacks";

export const Router = () => {
  return (
    <BrowserRouter>
      <BreadcrumbProvider>
        <FeedbacksProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Feedback />} />
              <Route path="/feedback-detail" element={<FeedbackDetails />} />
            </Route>
          </Routes>
        </FeedbacksProvider>
      </BreadcrumbProvider>
    </BrowserRouter>
  )
}