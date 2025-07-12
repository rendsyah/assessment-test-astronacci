import * as yup from 'yup';
import { useCallback, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginApi, LoginGoogleApi } from '@/actions/auth';
import { useGlobal } from '@/contexts/global.context';
import { HttpStatus } from '@/libs/constants/httpStatus.const';
import type { LoginForm } from '@/types/login.types';

const loginSchema = yup.object({
  email: yup.string().email('Email is invalid').required('Email is required'),
  password: yup.string().required('Password is required'),
});

const useLogin = () => {
  const { onOpenFeedbackModal } = useGlobal();

  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<LoginForm>({
    resolver: yupResolver(loginSchema),
  });

  const onShow = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  const onSubmit: SubmitHandler<LoginForm> = async (data) => {
    const response = await LoginApi(data);

    if (response.status >= HttpStatus.BAD_REQUEST) {
      onOpenFeedbackModal({
        type: 'error',
        message: response.message,
      });
      return;
    }
  };

  const onSubmitGoogle = async (data: google.accounts.id.CredentialResponse) => {
    const token = data.credential;
    const response = await LoginGoogleApi({ token });

    if (response.status >= HttpStatus.BAD_REQUEST) {
      onOpenFeedbackModal({
        type: 'error',
        message: response.message,
      });
      return;
    }
  };

  const onSubmitFacebook = (APP_ID: string) => {
    const REDIRECT_URI = `${window.location.origin}/facebook/callback`;
    window.location.href = `https://www.facebook.com/v17.0/dialog/oauth?client_id=${APP_ID}&redirect_uri=${REDIRECT_URI}&scope=email,public_profile&response_type=code&display=popup`;
  };

  return {
    form,
    showPassword,
    onShow,
    onSubmit,
    onSubmitGoogle,
    onSubmitFacebook,
  };
};

export default useLogin;
