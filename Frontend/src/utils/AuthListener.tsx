// useAuthListener.ts
import { useEffect, useState } from 'react';

const useAuthListener = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const verificaationToken = localStorage.getItem('token');
    setIsAuthenticated(!!verificaationToken);
  }, []);

  return isAuthenticated;
};

export default useAuthListener;
