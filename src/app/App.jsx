import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './Routes';
import { Header } from './components/Header/Header';
import { PostProvider } from './context/PostContext';

export function App() {
  return (
    <PostProvider>
      <Router>
        <Header />
        <AppRoutes />
      </Router>
    </PostProvider>
  );
}
