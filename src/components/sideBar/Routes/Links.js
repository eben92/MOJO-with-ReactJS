import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineUser, AiOutlineSetting } from "react-icons/ai";
import { IoFolderOutline, IoLogOutOutline } from "react-icons/io5";
import { ImStack } from "react-icons/im";

const Links = () => {
  return (
    <>
      <ul>
        <li className='sidebar__links'>
          <Link to='/' className='side__links'>
            <AiOutlineHome className='sidebar__icons' />
            <h5 className='side__links links_title'>dashboard</h5>
          </Link>
        </li>
        <li className='sidebar__links'>
          <Link to='/clients' className='side__links'>
            <AiOutlineUser className='sidebar__icons' />
            <h5 className='side__links links_title'>clients</h5>
          </Link>
        </li>
        <li className='sidebar__links'>
          <Link to='' className='side__links'>
            <ImStack className='sidebar__icons' />
            <h5 className='side__links links_title'>my documents</h5>
          </Link>
        </li>
        <li className='sidebar__links'>
          <Link to='/cases' className='side__links'>
            <IoFolderOutline className='sidebar__icons' />
            <h5 className='side__links links_title'>cases</h5>
          </Link>
        </li>
        <li className='sidebar__links'>
          <Link to='/settings' className='side__links'>
            <AiOutlineSetting className='sidebar__icons' />
            <h5 className='side__links links_title'>settings</h5>
          </Link>
        </li>
        <li className='sidebar__links'>
          <Link to='/logout' className='side__links'>
            <IoLogOutOutline className='sidebar__icons' />
            <h5 className='side__links links_title'>logout</h5>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Links;
