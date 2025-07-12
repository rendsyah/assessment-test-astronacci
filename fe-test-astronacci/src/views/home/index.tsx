'use client';

import { useQuery } from '@tanstack/react-query';
import { ContentData } from '@/types/content';
import HomeHeader from './components/HomeHeader';
import { useInternal } from '@/hooks/useInternal';
import useContent from './hooks/useHome';
import { Routes } from '@/libs/constants/routes.const';
import { HttpStatus } from '@/libs/constants/httpStatus.const';
import Skeleton from '@/components/ui/skeleton/Skeleton';

const HomeView = () => {
  const { type, onChangeType } = useContent();

  const internalAPI = useInternal();

  const {
    isLoading,
    data = [],
    error,
  } = useQuery<ContentData[]>({
    queryKey: ['content', { type }],
    queryFn: async () => {
      const query = {
        type,
      };
      const res = await internalAPI(Routes.API_CONTENT, query);

      if (res.status !== HttpStatus.OK) throw new Error('Failed to fetch data.');

      const { data } = await res.json();
      return data;
    },
  });

  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12">
        <HomeHeader />
      </div>

      <div className="col-span-12 flex gap-3 mb-4">
        {['article', 'video'].map((t) => (
          <button
            key={t}
            onClick={() => onChangeType(t)}
            className={`px-4 py-2 rounded-md text-sm border border-secondary/[8%] ${
              type === t ? 'bg-primary text-white/90' : 'text-gray-400'
            }`}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {isLoading && (
        <>
          {Array.from({ length: 14 }).map((_, index) => (
            <div key={index} className="col-span-6 space-y-6 lg:col-span-4">
              <Skeleton className="h-20.5 rounded-lg bg-ui-800" />
            </div>
          ))}
        </>
      )}

      {error && (
        <div className="col-span-12 text-center">
          <p className="text-red-600">Failed to load content</p>
        </div>
      )}

      {!isLoading && data?.length === 0 && (
        <div className="col-span-12 text-center">
          <p className="text-gray-400">No content available.</p>
        </div>
      )}

      {!isLoading && data?.length > 0 && (
        <>
          {data.map((item) => (
            <div key={item.id} className="col-span-6 space-y-6 lg:col-span-4">
              <div className="p-4 border border-secondary/[8%] rounded-lg">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-400 capitalize">{item.type}</p>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default HomeView;
