import { axiosClient } from './axiosClient';
const rootUrl: string = import.meta.env.VITE_BACKEND_BASE_URL;
export interface ParamsTypes {
  page?: number;
  limit?: number;
  sort?: string;
}
export const commonApi = {
  getData(url: string, params?: ParamsTypes) {
    return axiosClient.get(`${url}`, {
      baseURL: rootUrl,
      params: {
        limit: params?.limit,
        page: params?.page,
        sort: params?.sort,
      },
    });
  },
  postData(url: string, data: unknown) {
    return axiosClient.post(`${url}`, data, {
      baseURL: rootUrl,
    });
  },
  patchData(url: string, data: unknown) {
    return axiosClient.patch(`${url}`, data, {
      baseURL: rootUrl,
    });
  },
};
