import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import ApplicationRoutes from './components/ApplicationRoutes';

export default function App() {
  return (
    <Router>
      <Navbar />
      <ApplicationRoutes />
    </Router>
  );
}
