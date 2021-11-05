import React from "react";
import { FaLeaf, FaSearch } from "react-icons/fa";
import Links from "./Routes/Links";

// TODO LIST
// make responsive
// use hooks

const SideBar = () => {
  return (
    <>
      {/* sideBar */}

      <div className='sideBar'>
        <div className='navBar__container'>
          <FaLeaf className='logo' /> <h2 className='title'>mojo</h2>
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
