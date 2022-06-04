import { useEffect } from 'react';
import { useComponentDidMount } from '@/client/hooks';
import { toast } from 'react-toastify';

export const Toast = ({ success, message }) => {
  const isComponentMounted = useComponentDidMount();

  useEffect(() => {
    if (isComponentMounted) {
      if (success)
        toast.success(`${message} successfully!`);
      else
        toast.error(message || "Sorry, an error occurred!");
    }
  }, [success])

  return <div></div>
}