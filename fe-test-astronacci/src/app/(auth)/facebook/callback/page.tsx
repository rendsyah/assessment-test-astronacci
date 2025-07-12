import type React from 'react';
import type { Metadata } from 'next';
import FacebookView from '@/views/auth/facebook';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Login with Facebook - Astronacci Application',
  description: 'Securely sign in to Astronacci Application using your Facebook account',
};

const FacebookCallbackPage: React.FC = () => {
  return (
    <Suspense>
      <FacebookView />;
    </Suspense>
  );
};

export default FacebookCallbackPage;
