import type React from 'react';
import type { Metadata } from 'next';
import HomeView from '@/views/home';

export const metadata: Metadata = {
  title: 'Home - Astronacci Application',
  description: 'Home page of Astronacci Application',
};

const HomePage: React.FC = () => {
  return <HomeView />;
};

export default HomePage;
