import { getStorageValue } from '@hooks/useLocalStorage';
import { axiosInstance } from './axios.config';

export const getUsers = async () => {
  const dataUserStorage = getStorageValue({
    key: 'users',
    defaultValue: ''
  });

  // FIXME: search data
  if (dataUserStorage && dataUserStorage.length > 5) {
    return dataUserStorage;
  } else {
    const data = await axiosInstance.get<{
      results: Array<UserInterface>;
      info: UserInfoInterface;
    }>('/api', {
      params: {
        results: 30
      }
    });

    return data.data.results;
  }
};
