import { axiosClient } from './axiosClient';
const rootUrl: string = import.meta.env.VITE_BACKEND_BASE_URL;

export const commonApi = {
  getData(url: string) {
    return axiosClient.get(`${url}`, {
      baseURL: rootUrl,
    });
  },
  postData(url: string, data: unknown) {
    return axiosClient.post(`${url}`, data, {
      baseURL: rootUrl,
    });
  },
};
