import * as yup from 'yup';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterApi } from '@/actions/auth';
import { useGlobal } from '@/contexts/global.context';
import { HttpStatus } from '@/libs/constants/httpStatus.const';
import type { RegisterForm } from '@/types/login.types';

const registerSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Email is invalid').required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  membership: yup.string().required('Membership is required'),
});

const useRegister = () => {
  const { onOpenFeedbackModal } = useGlobal();

  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const form = useForm<RegisterForm>({
    resolver: yupResolver(registerSchema),
  });

  const onShow = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  const onSubmit: SubmitHandler<RegisterForm> = async (data) => {
    const response = await RegisterApi(data);

    if (response.status >= HttpStatus.BAD_REQUEST) {
      onOpenFeedbackModal({
        type: 'error',
        message: response.message,
      });
      return;
    }

    router.replace('/home');
  };

  return {
    form,
    showPassword,
    onShow,
    onSubmit,
  };
};

export default useRegister;
