import { Router } from 'next/router';
import { useEffect, useState } from 'react';

const useLoader = (): boolean => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const start = (): void => {
      console.log('start');
      setLoading(true);
    };
    const end = (): void => {
      console.log('findished');
      setLoading(false);
    };
    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);
    return (): void => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);
  return loading;
};

export default useLoader;
