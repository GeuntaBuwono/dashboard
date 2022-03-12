export const getUsers = async () => {
  const res = await fetch('http://localhost:3000/api/user');
  const data: {
    results: Array<UserInterface>;
    info: UserInfoInterface;
  } = await res.json();
  return data;
};
