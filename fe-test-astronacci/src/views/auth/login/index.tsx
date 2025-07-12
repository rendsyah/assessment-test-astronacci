'use client';

import type React from 'react';
import Script from 'next/script';
import Link from 'next/link';
import Input from '@/components/ui/form/Input';
import EyeIcon from '@/components/icons/Eye';
import EyeSlashIcon from '@/components/icons/EyeSlash';
import ButtonPrimary from '@/components/ui/button/ButtonPrimary';
import FacebookIcon from '@/components/icons/Facebook';
import useLogin from './hooks/useLogin.hook';
import ButtonSecondary from '@/components/ui/button/ButtonSecondary';
import { useEffect } from 'react';

const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
const FACEBOOK_APP_ID = process.env.NEXT_PUBLIC_FACEBOOK_APP_ID;

const LoginView: React.FC = () => {
  const { form, showPassword, onShow, onSubmit, onSubmitGoogle, onSubmitFacebook } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;

  useEffect(() => {
    if (window.google && !window._gsiInitialized) {
      window.google.accounts.id.initialize({
        client_id: GOOGLE_CLIENT_ID!,
        callback: onSubmitGoogle,
      });

      window._gsiInitialized = true;
    }

    if (window.google) {
      window.google.accounts.id.renderButton(document.getElementById('googleBtn'), {
        theme: 'filled_black',
        size: 'medium',
        shape: 'circle',
        type: 'icon',
      });
    }
  }, []);

  return (
    <>
      <Script
        src="https://accounts.google.com/gsi/client"
        strategy="afterInteractive"
        onLoad={() => {
          if (window.google && !window._gsiInitialized) {
            window._gsiInitialized = true;

            window.google.accounts.id.initialize({
              client_id: GOOGLE_CLIENT_ID!,
              callback: onSubmitGoogle,
            });

            window.google.accounts.id.renderButton(document.getElementById('googleBtn')!, {
              theme: 'filled_black',
              size: 'medium',
              shape: 'circle',
              type: 'icon',
            });
          }
        }}
      />
      <div className="flex flex-col flex-1 w-full">
        <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
          <div className="flex flex-col gap-2 mb-5 sm:mb-8">
            <h1 className="text-2xl font-bold mb-1">Login</h1>
            <span className="text-sm text-gray-400">
              Enter your credentials to access your account.
            </span>
          </div>
          <div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5">
              <ButtonSecondary icon={<div id="googleBtn" />}>
                <span>Google</span>
              </ButtonSecondary>
              <ButtonSecondary
                icon={<FacebookIcon className="w-8.5 h-8.5" />}
                onClick={() => onSubmitFacebook(FACEBOOK_APP_ID as string)}
              >
                <span>Facebook</span>
              </ButtonSecondary>
            </div>
          </div>
          <div className="flex items-center gap-4 py-3 sm:py-5">
            <div className="h-px flex-1 bg-secondary/[16%]" />
            <span className="text-sm py-2">Or</span>
            <div className="h-px flex-1 bg-secondary/[16%]" />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-6">
              <div>
                <Input
                  id="email"
                  autoComplete="off"
                  label="Email"
                  placeholder="Enter your email"
                  error={errors.email?.message}
                  required
                  {...register('email')}
                />
              </div>

              <div>
                <Input
                  id="password"
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  icon={
                    <div className="cursor-pointer" onClick={onShow}>
                      {showPassword ? (
                        <EyeIcon className="h-5 w-5" />
                      ) : (
                        <EyeSlashIcon className="h-5 w-5" />
                      )}
                    </div>
                  }
                  iconPosition="right"
                  error={errors.password?.message}
                  required
                  {...register('password')}
                />
              </div>

              <div className="flex justify-end">
                <Link href="/forgot-password" className="text-sm text-primary">
                  Forgot password?
                </Link>
              </div>

              <ButtonPrimary type="submit" isLoading={isSubmitting} disabled={isSubmitting}>
                Log in
              </ButtonPrimary>

              <div>
                <p className="text-center text-sm text-gray-400">
                  Don&apos;t have an account?{' '}
                  <Link href="/register" className="text-primary">
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginView;
