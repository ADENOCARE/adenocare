import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Register from './pages/Register';
import Login from './pages/Login';
import About from './pages/About';
import HealthLibrary from './pages/HealthLibrary';
import FAQ from './pages/FAQ';
import Appointment from './pages/Appointment';
import UserDashboard from './pages/Userdashboard';
import Community from './pages/Community';
import Navbar from './components/Navbar';
<<<<<<< HEAD
import Footer from './components/Footer'; 
import ClassificationPage from './pages/ClassificationPage';
=======
import Footer from './components/Footer';
>>>>>>> d98f2bf737eb5f70234c10230ceb5bcdee49a823

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/classify" element={<ClassificationPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/community" element={<Community />} />
          <Route path="/about" element={<About />} />
          <Route path="/healthlibrary" element={<HealthLibrary />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/userdashboard" element={<UserDashboard />} />
          <Route path="/appointments" element={<Appointment />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
