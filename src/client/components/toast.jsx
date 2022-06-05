import { useEffect } from 'react';
import { useComponentDidMount } from '@/hooks';
import { toast } from 'react-toastify';

export const Toast = ({ status, message }) => {
  const isComponentMounted = useComponentDidMount();

  useEffect(() => {
    if (isComponentMounted) {
      if (status === 'success')
        toast.success(`${message} successfully!`);
      else if (status === 'error')
        toast.error(message || "Sorry, an error occurred!");
    }
  }, [status])

  return <div></div>
}