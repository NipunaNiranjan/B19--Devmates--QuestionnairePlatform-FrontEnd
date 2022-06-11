import React from "react";
import "./App.css";
import { Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import CreateSAQPage from "./pages/CreateSAQPage"
import ViewQuestionsPage from "./pages/ViewQuestionsPage";
import ShortAnswerQuestionnairPage from "./pages/ShortAnswerQuestionnairPage";
import SavedPdfPage from './pages/SavedPdfPage'
import CreateShortAnswerTypeQuestion from "./pages/CreateShortAnswerTypeQuestion";
import CreateQuestionPage from "./pages/CreateQuestionPage";

function App() {
  // add the the routings to this page
  return (
    <>
    <Routes>
      <Route path="/createSAQPage" element={<CreateSAQPage />}/>
      <Route path="/viewQuestionsPage/:id" element={<ViewQuestionsPage />}/>
      <Route path="/savedPdf" element={<SavedPdfPage />}/>
      <Route path="/createShortAnswerQuestion" element={<CreateShortAnswerTypeQuestion />}/>
      <Route path="/createQuestionPage" element={<CreateQuestionPage />}/>
      <Route path="/" element={<ShortAnswerQuestionnairPage />}/>
    </Routes>
    </>
  );
}

export default App;