import CryptoJS from 'crypto-js';
import { toast } from 'react-toastify';
const secretKey = import.meta.env.VITE_SECRET;
const saveCookie = (cookieName: string, cookieValue: unknown) => {
  //setting cookie with expiry time
  document.cookie = cookieName + ' = ' + cookieValue + ';';
};
export const encryptData = (name: string, data: unknown) => {
  const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
  saveCookie(name, encrypted);
};
export const decryptData = (name: string) => {
  const encrypted = getCookie(name);
  if (encrypted) {
    const decrypted = CryptoJS.AES.decrypt(encrypted, secretKey).toString(CryptoJS.enc.Utf8);
    return JSON.parse(decrypted);
  }
  return null;
};
export const getCookie = (name: string) =>
  document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${name}=`))
    ?.split('=')[1];

export const deleteCookies = () => {
  const allCookies = document.cookie.split(';');

  for (let i = 0; i < allCookies.length; i++)
    document.cookie = allCookies[i] + '=;expires=' + new Date(0).toUTCString();
};
export const removeSingleCookie = (name: string) => {
  document.cookie = name + '=;expires=' + new Date(0).toUTCString();
};
export const getCookieData = (cookieName: string) => {
  return document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${cookieName}=`))
    ?.split('=')[1];
};
export const useAuth = () => {
  const isAuthorizations = decryptData('token');
  const isLoggedIn = decryptData('isLoggedIn');
  if (isAuthorizations && isLoggedIn) {
    return {
      auth: true,
    };
  } else {
    return {
      auth: false,
    };
  }
};

export const successMsg = (message: string) => {
  toast.success(message, {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
};
export const errorMsg = (message: string) => {
  toast.error(message, {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
};
