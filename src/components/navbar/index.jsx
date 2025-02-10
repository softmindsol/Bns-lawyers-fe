import { BiMenu, BiUser } from "react-icons/bi";
import useAuthStore from "../../../stores/auth.store";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useAuthenticate from "../../hooks/useAuthenticate";

const Navbar = ({ onMenuClick }) => {
  const { logout, userInfo } = useAuthStore();
  const { decoded } = useAuthenticate();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  useEffect(() => {
    if (decoded?.user_id) userInfo(decoded?.user_id);
  }, [userInfo, decoded?.user_id]);

  return (
    <nav className="conteiner mx-2 my-4 rounded-md border-gray-200 bg-white px-4 py-2 shadow-md md:mx-8">
      <div className="flex items-center justify-between">
        <button
          className="rounded-lg p-2 hover:bg-gray-100"
          onClick={onMenuClick}
        >
          <BiMenu className="h-5 w-5 text-gray-600" />
        </button>

        <div className="flex items-center space-x-1 md:space-x-4">
          <button className="rounded-full p-1 hover:bg-gray-100">
            <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-gray-600">
              <span className="text-sm font-semibold text-gray-600">i</span>
            </div>
          </button>

          <button className="rounded-full p-1 hover:bg-gray-100">
            <svg
              className="h-5 w-5 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          </button>

          {/* Form icon */}
          <button className="rounded-full p-1 hover:bg-gray-100">
            <svg
              className="h-5 w-5 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </button>

          {/* User profile */}
          <button className="rounded-full p-1 hover:bg-gray-100">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
              <BiUser className="h-5 w-5 text-gray-600" />
            </div>
          </button>
          <button className="rounded border px-3 py-1" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
