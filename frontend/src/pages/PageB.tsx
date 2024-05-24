import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/componentsList/Navbar";

const PageB = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleClick = () => {
    navigate("/");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };


  return (
    <div>
    <Navbar handleClick={handleClick} />
  </div>
  );
};

export default PageB;
