export const getUsers = async ({ page = 1 }: { page?: number }) => {
  const res = await fetch(`http://localhost:3000/api/user?page=${page}`);
  const data: {
    results: Array<UserInterface>;
    info: UserInfoInterface;
  } = await res.json();
  return data;
};
