import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/componentsList/Navbar";
import Sidebar from "../components/componentsList/Sidebar";
import HeaderThread from "../components/componentsList/HeaderThread";
import Post from "../components/componentsList/Post";

const PageB = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="flex h-screen w-screen">
      <Sidebar isOpen={isSidebarOpen} />
      <div className="flex flex-col flex-grow">
        <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div
          className={`flex flex-col flex-grow transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-0"}`}
        >
          <h1 className="uppercase text-primary font-extrabold text-2xl text-center press-start-2p-regular p-4">бред</h1>
          <HeaderThread />
          <Post />
        </div>
      </div>
    </div>
  );
};

export default PageB;


