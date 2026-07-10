import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from '@/pages/PageNotFound';
import ScrollToTop from './components/ScrollToTop';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import Courses from '@/pages/Courses';

import Enroll from '@/pages/Enroll';
import Contact from '@/pages/Contact';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />

          <Route path="/enroll" element={<Enroll />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  )
}

export default App