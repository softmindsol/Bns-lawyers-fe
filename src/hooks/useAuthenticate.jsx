const useAuthenticate = () => {
  const userData = localStorage.getItem("user");
  let parsedUserData = null;

  if (userData) {
    parsedUserData = JSON.parse(userData);
  }

  return {
    accessToken: parsedUserData?.accessToken || null,
    userInfo: parsedUserData?.customer || null,
  };
};

export default useAuthenticate;
