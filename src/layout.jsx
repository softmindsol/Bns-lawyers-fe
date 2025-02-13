import { useState } from "react";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen lg:fixed lg:top-0 flex-col lg:grid lg:grid-cols-[1fr_6fr]">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="flex flex-1 flex-col">
        <header>
          <Navbar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
        </header>

        <main className="flex-1 p-4">{children}</main>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Layout;
