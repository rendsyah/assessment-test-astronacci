'use client';

import type React from 'react';
import Link from 'next/link';
import Input from '@/components/ui/form/Input';
import EyeIcon from '@/components/icons/Eye';
import EyeSlashIcon from '@/components/icons/EyeSlash';
import ButtonPrimary from '@/components/ui/button/ButtonPrimary';
import useRegister from './hooks/useRegister.hook';
import { Controller } from 'react-hook-form';
import Select from '@/components/ui/form/Select';

const RegisterView: React.FC = () => {
  const { form, showPassword, onShow, onSubmit } = useRegister();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;

  return (
    <div className="flex flex-col flex-1 w-full">
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div className="flex flex-col gap-2 mb-5 sm:mb-8">
          <h1 className="text-2xl font-bold mb-1">Register</h1>
          <span className="text-sm text-gray-400">Create your account to get started.</span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-6">
            <div>
              <Input
                id="name"
                autoComplete="off"
                label="Name"
                placeholder="Enter your name"
                error={errors.name?.message}
                required
                {...register('name')}
              />
            </div>

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
              <Controller
                name="membership"
                control={control}
                render={({ field }) => (
                  <Select
                    id="membership"
                    label="Membership"
                    placeholder="Choose Membership"
                    value={field.value}
                    onChange={field.onChange}
                    options={[
                      {
                        id: 'A',
                        name: 'A',
                      },
                      {
                        id: 'B',
                        name: 'B',
                      },
                      {
                        id: 'C',
                        name: 'C',
                      },
                    ]}
                    error={errors.membership?.message}
                    required
                  />
                )}
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

            <ButtonPrimary
              className="mt-8"
              type="submit"
              isLoading={isSubmitting}
              disabled={isSubmitting}
            >
              Submit
            </ButtonPrimary>

            <div>
              <p className="text-center text-sm text-gray-400">
                Already have an account?{' '}
                <Link href="/login" className="text-primary">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterView;
