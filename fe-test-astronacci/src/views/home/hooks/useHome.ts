import { useCallback, useState } from 'react';

const useContent = () => {
  const [type, setType] = useState('article');

  const onChangeType = useCallback((value: string) => {
    setType(value);
  }, []);

  return {
    type,
    onChangeType,
  };
};

export default useContent;
