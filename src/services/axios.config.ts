import Axios, { AxiosRequestConfig } from 'axios';

const defaultOptions: AxiosRequestConfig = {
  baseURL: process.env.BASE_API_URL,
  timeout: 30000
};

export const axiosInstance = Axios.create(defaultOptions);
