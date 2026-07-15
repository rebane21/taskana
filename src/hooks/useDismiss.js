import { useEffect } from 'react';

export const useDismiss = ({ ref, isActive, onDismiss }) => {
  useEffect(() => {
    if (!isActive) {
      return undefined;
    }

    const handleDocumentClick = (event) => {
      if (!ref.current?.contains(event.target)) {
        onDismiss();
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onDismiss();
      }
    };

    document.addEventListener('mousedown', handleDocumentClick);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isActive, onDismiss, ref]);
};
