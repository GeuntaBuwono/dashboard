import { axiosInstance } from './axios.config';

export const getUsers = async () => {
  const data = await axiosInstance.get<{
    results: Array<UserInterface>;
    info: UserInfoInterface;
  }>('/api', {
    params: {
      results: 30
    }
  });
  return data.data.results;
};
