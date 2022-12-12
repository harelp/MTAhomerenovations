import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
