import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PostPage from '../pages/PostPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/posts/:postId" element={<PostPage />} />
    </Routes>
  );
}

export default AppRoutes
