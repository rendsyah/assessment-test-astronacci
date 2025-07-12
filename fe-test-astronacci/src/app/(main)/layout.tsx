import type React from 'react';
import type { User } from '@/types/commons.types';
import { catchServerComponent } from '@/libs/utils/catch.utils';
import { externalAPI } from '@/libs/interceptors/api-ext.interceptor';
import { Routes } from '@/libs/constants/routes.const';
import AppLayout from '@/components/layout/AppMain';

const AppLayoutPage: React.FC<{ children: React.ReactNode }> = async ({ children }) => {
  try {
    const fetchUser = await externalAPI.get(Routes.USER);
    const dataUser: User = fetchUser.data.data;

    return <AppLayout user={dataUser}>{children}</AppLayout>;
  } catch (error) {
    catchServerComponent(error);
  }
};

export default AppLayoutPage;
