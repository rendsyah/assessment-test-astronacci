'use client';

import type React from 'react';
import type { User } from '@/types/commons.types';
import { useEffect, useMemo } from 'react';
import { useSidebar } from '@/contexts/sidebar.context';
import { useNetwork } from '@/contexts/network.context';
import { cn } from '@/libs/utils/cn.utils';
import AppHeader from './AppHeader';
import AppSidebar from './AppSidebar';
import AppBackdrop from './AppBackdrop';
import Notification from '../ui/notification/Notification';

type AppMainLayoutProps = {
  user: User;
  children: React.ReactNode;
};

const AppMainLayout: React.FC<AppMainLayoutProps> = ({ user, children }) => {
  const { isOnline, connectionRef } = useNetwork();
  const { isExpanded, isMobileOpen } = useSidebar();

  const mainContentMargin = useMemo(() => {
    if (isMobileOpen) return 'ml-0';
    return isExpanded ? 'lg:ml-[240px]' : 'lg:ml-[90px]';
  }, [isExpanded, isMobileOpen]);

  useEffect(() => {
    const wasOnline = connectionRef.current;

    if (wasOnline !== null && wasOnline !== isOnline) {
      Notification({
        message: isOnline ? 'Connected to internet' : 'You are offline',
        description: isOnline
          ? 'Your network connection has been restored.'
          : 'Please check your connection and try again.',
        type: isOnline ? 'success' : 'error',
      });
    }

    connectionRef.current = isOnline;
  }, [isOnline, connectionRef]);

  return (
    <div className="min-h-screen xl:flex">
      {/* SIDEBAR & BACKDROP */}
      <AppSidebar />
      <AppBackdrop />
      {/* MAIN CONTENT */}
      <div className={cn('flex-1 transition-[margin] duration-300 ease-in-out', mainContentMargin)}>
        {/* HEADER */}
        <AppHeader user={user} />
        {/* PAGE CONTENT */}
        <div className="p-4 md:p-6 mx-auto max-w-(--breakpoint-2xl)">{children}</div>
      </div>
    </div>
  );
};

export default AppMainLayout;
