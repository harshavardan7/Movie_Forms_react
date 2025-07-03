import './App.css';
import FeedbackForm from './Componets/GiveFeedback';
import ViewReviews from './Componets/ViewReviews';
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
   <Router>
      <div className="App">
        <h1>🎥Movie Feedback App</h1>
        <div className="tabs">
          <Link to="/givefeedback" className="tab-link">
            GiveFeedback
          </Link>
          <Link to="/viewreviews" className="tab-link">
          View Reviews
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<Navigate to="/givefeedback"></Navigate>} />
          <Route path="/givefeedback" element={<FeedbackForm/>} />
          <Route path="/viewreviews" element={<ViewReviews/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
