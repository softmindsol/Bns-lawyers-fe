import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-screen-md rounded-lg bg-white p-6 text-center shadow-lg">
        <h1 className="mb-2 text-4xl font-extrabold text-gray-700">404</h1>
        <p className="mb-4 text-gray-600">
          Sorry! The page you&apos;re looking for doesn&apos;t exist.
        </p>

        <button onClick={handleBack}>Back to Home</button>
      </div>
    </div>
  );
};

export default NotFound;
