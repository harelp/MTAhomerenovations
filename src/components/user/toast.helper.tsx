import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const toastInt = (data: string, type: string) => {
  if (type === 'error') {
    toast.error(data, {
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      progress: undefined,
      theme: 'dark'
    });
  }

  if (type === 'ok') {
    toast.success(data, {
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      progress: undefined,
      pauseOnHover: false,
      theme: 'dark'
    });
  }
};

export const notify = () =>
  toast('Wow so easy !', {
    hideProgressBar: true,
    theme: 'dark'
  });

let loginToast: any;
export const dismissAll = () => toast.dismiss();
export const isLoading = (renderData: string) => {
  loginToast = toast.loading(renderData, {
    theme: 'dark'
  });
};

export const loaded = (render: any, type: any) => {
  toast.update(loginToast, {
    render: render,
    type: type,
    isLoading: false,
    autoClose: 2000
  });
};
