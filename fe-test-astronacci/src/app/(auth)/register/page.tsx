import type React from 'react';
import type { Metadata } from 'next';
import RegisterView from '@/views/auth/register';

export const metadata: Metadata = {
  title: 'Register - Astronacci Application',
  description: 'Authentication page of Astronacci Application',
};

const RegisterPage: React.FC = () => {
  return <RegisterView />;
};

export default RegisterPage;
