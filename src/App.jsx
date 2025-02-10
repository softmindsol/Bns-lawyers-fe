import { Suspense } from "react";
import router from "./routes";
import { RouterProvider } from "react-router-dom";
import Loader from "./components/loader";
import { ChatProvider } from "./hooks/useChat";

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <ChatProvider>
        <RouterProvider router={router} />
      </ChatProvider>
    </Suspense>
  );
};

export default App;
