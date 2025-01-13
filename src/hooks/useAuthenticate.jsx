import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
const useAuthenticate = () => {
  const access_token = Cookies.get("access_token") || "";
  const decoded = jwtDecode(access_token) || {};

  return {
    access_token,
    decoded,
  };
};

export default useAuthenticate;
