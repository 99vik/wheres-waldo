import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import ApplicationRoutes from './components/ApplicationRoutes';

export default function App() {
  return (
    <div className="min-h-screen">
      <Router>
        <Navbar />
        <ApplicationRoutes />
      </Router>
    </div>
  );
}
