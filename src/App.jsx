import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Register from './pages/Register';
import Login from './pages/Login';
import Community from './pages/Community';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import ClassificationPage from './pages/ClassificationPage';

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
        </Routes>
      </main>
      <Footer /> 
      
    </div>
  );
}

export default App;
