import React from "react";
import { useState, useEffect } from "react";
import {
  FaLeaf,
  FaSearch,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import Links from "./Routes/Links";

// TODO LIST
// make responsive
// use hooks

const SideBar = () => {
  const [min__sidebar, setMin__Sidebar] = useState(false);

  return (
    <>
      {/* sideBar */}

      <div className={`sideBar ${min__sidebar ? "hide__sidebar" : ""}`}>
        <div className='navBar__container'>
          <div className={`log ${min__sidebar ? "hide__log" : ""}`}>
            <FaLeaf className='logo' /> <h2 className='title'>mojo</h2>
          </div>
          <FaChevronLeft
            id={`${min__sidebar ? "rotate__float" : ""}`}
            className='float'
            onClick={() => setMin__Sidebar(!min__sidebar)}
          />
        </div>

        <div className='search'>
          <label className='sidebar__search'>
            <input type='text' name='search1' id='searchID' />
            <button className='sidebar__search__btn'>
              <FaSearch className='sidebar__search__icon' />
            </button>
          </label>
        </div>
        <Links />
      </div>

      {/* end of Sidebar */}
    </>
  );
};

export default SideBar;
