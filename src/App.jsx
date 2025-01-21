import { Suspense } from "react";
import router from "./routes";
import { RouterProvider } from "react-router-dom";
import Loader from "./components/loader";

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
