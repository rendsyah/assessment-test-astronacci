'use server';

import { redirect } from 'next/navigation';
import { setSession } from '@/libs/utils/session.utils';
import { setCookie } from '@/libs/utils/cookie.utils';
import { catchServerRoute } from '@/libs/utils/catch.utils';
import { App } from '@/libs/constants/app.const';
import { Routes } from '@/libs/constants/routes.const';
import { externalAPI } from '@/libs/interceptors/api-ext.interceptor';
import type { LoginForm, LoginOAuthForm, RegisterForm } from '@/types/login.types';

export const LoginApi = async (data: LoginForm) => {
  try {
    const response = await externalAPI.post(Routes.AUTH_LOGIN, data);
    await Promise.all([
      setSession(response.data.data.access_token),
      setCookie(App.REDIRECT_NAME, response.data.data.redirect_to),
    ]);
    redirect('/home');
  } catch (error) {
    return await catchServerRoute(error);
  }
};

export const LoginGoogleApi = async (data: LoginOAuthForm) => {
  try {
    const response = await externalAPI.post(Routes.AUTH_GOOGLE_LOGIN, data);
    await Promise.all([
      setSession(response.data.data.access_token),
      setCookie(App.REDIRECT_NAME, response.data.data.redirect_to),
    ]);
    redirect('/home');
  } catch (error) {
    return await catchServerRoute(error);
  }
};

export const LoginFacebookApi = async (data: LoginOAuthForm) => {
  try {
    const response = await externalAPI.post(Routes.AUTH_FACEBOOK_LOGIN, data);
    await Promise.all([
      setSession(response.data.data.access_token),
      setCookie(App.REDIRECT_NAME, response.data.data.redirect_to),
    ]);
    redirect('/home');
  } catch (error) {
    return await catchServerRoute(error);
  }
};

export const RegisterApi = async (data: RegisterForm) => {
  try {
    await externalAPI.post(Routes.AUTH_REGISTER, data);
    redirect('/login');
  } catch (error) {
    return await catchServerRoute(error);
  }
};
