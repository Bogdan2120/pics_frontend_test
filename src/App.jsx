import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from 'components/Navbar/Navbar';

import styles from './app.module.scss';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const Comments = lazy(() => import('./pages/Comments/Comments'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

function App() {
  return (
    <div className={styles.sectionApp}>
      <Navbar />
      <Suspense fallback={<div>...Loader</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
