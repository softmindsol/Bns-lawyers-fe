import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const useAuthenticate = () => {
  const access_token = Cookies.get("access_token");
  let decoded = null;

  try {
    if (access_token) {
      decoded = jwtDecode(access_token);
    }
  } catch (error) {
    console.error("Failed to decode access token:", error);
  }

  return {
    access_token,
    decoded,
  };
};

export default useAuthenticate;
