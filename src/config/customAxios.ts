import axios, { AxiosError, AxiosResponse } from "axios";
import { BASE_URL } from "./constants";


export const customAxios = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});


customAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError<{ error: string }>) => {
    return Promise.reject(error.response?.data?.error || error?.message);
  }
);


customAxios.interceptors.response.use(
  (response: AxiosResponse) => response?.data,
  async (error: AxiosError<{ error: string }>) => {
    if (error.response?.status === 401) {
        console.log('kdkdk')  
    }

    return Promise.reject(error.response?.data?.error || error?.message);
  }
);


