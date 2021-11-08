import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout'
import TestimonialsPage from './components/TestimonialsPage'
import CateringPage from './components/CateringPage'
import HomePage from './components/HomePage'
import MenuPage from './components/MenuPage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="catering" element={<CateringPage />} />
          <Route path="testimonials" element={<TestimonialsPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
