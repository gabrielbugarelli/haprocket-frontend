import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Feedback } from "../pages/Feedback";
import { FeedbackDetails } from "../pages/FeedbackDetails";
import { Layout } from "../pages/Layout";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Feedback />} />
          <Route path="/feedback-detail" element={<FeedbackDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}