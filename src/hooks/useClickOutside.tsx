import { Dispatch, RefObject, SetStateAction, useEffect } from 'react';

const useDetectClickOutside = (
  ref: RefObject<HTMLDivElement>,
  setState: Dispatch<SetStateAction<boolean>>,
) => {
  const handler = (e: MouseEvent) => {
    if (!ref.current || ref.current.contains(e.target as Node)) return;

    setState(false);
  };
  useEffect(() => {
    window.addEventListener('click', handler);

    return () => window.removeEventListener('click', handler);
  }, []);
};

export default useDetectClickOutside;
