import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage'; // We will create this next
import ScrollToTop from './components/ScrollToTop';
import { ToastProvider } from './contexts/ToastContext';

function App() {
  return (
    <Router>
      <ToastProvider>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/movie/:movieId" element={<MovieDetailsPage />} />
            </Routes>
          </main>
        </div>
        <ScrollToTop />
      </ToastProvider>
    </Router>
  );
}

export default App;
