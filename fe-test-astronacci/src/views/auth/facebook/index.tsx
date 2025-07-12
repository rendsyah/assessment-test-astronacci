'use client';

import type React from 'react';
import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import useFacebook from './hooks/useFacebook.hook';

const FacebookView = () => {
  const { onSubmitFacebook } = useFacebook();

  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const code = searchParams.get('code');
    const error = searchParams.get('error');

    if (error) {
      router.push('/login');
      return;
    }
    if (code) {
      onSubmitFacebook(code);
      return;
    }
  }, [searchParams, router, onSubmitFacebook]);

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <span className="text-xl">Authenticating with Facebook...</span>
      <p className="text-sm text-gray-400">Please wait while we connect your account.</p>
    </div>
  );
};

export default FacebookView;
