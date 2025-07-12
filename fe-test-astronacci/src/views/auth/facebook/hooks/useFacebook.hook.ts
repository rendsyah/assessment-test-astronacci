import { LoginFacebookApi } from '@/actions/auth';
import { useGlobal } from '@/contexts/global.context';
import { HttpStatus } from '@/libs/constants/httpStatus.const';
import { useCallback } from 'react';

const useFacebook = () => {
  const { onOpenFeedbackModal } = useGlobal();

  const onSubmitFacebook = useCallback(
    async (data: string) => {
      const response = await LoginFacebookApi({ token: data });

      if (response.status >= HttpStatus.BAD_REQUEST) {
        onOpenFeedbackModal({
          type: 'error',
          message: response.message,
        });
        return;
      }
    },
    [onOpenFeedbackModal],
  );

  return {
    onSubmitFacebook,
  };
};

export default useFacebook;
