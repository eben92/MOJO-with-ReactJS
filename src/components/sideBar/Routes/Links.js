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
            <AiOutlineHome className='sidebar__icons' /> dashboard
          </Link>
        </li>
        <li className='sidebar__links'>
          <Link to='/clients' className='side__links'>
            <AiOutlineUser className='sidebar__icons' /> clients
          </Link>
        </li>
        <li className='sidebar__links'>
          <Link to='' className='side__links'>
            <ImStack className='sidebar__icons' /> my documents
          </Link>
        </li>
        <li className='sidebar__links'>
          <Link to='/cases' className='side__links'>
            <IoFolderOutline className='sidebar__icons' /> cases
          </Link>
        </li>
        <li className='sidebar__links'>
          <Link to='/settings' className='side__links'>
            <AiOutlineSetting className='sidebar__icons' /> settings
          </Link>
        </li>
        <li className='sidebar__links'>
          <Link to='/logout' className='side__links'>
            <IoLogOutOutline className='sidebar__icons' /> logout
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Links;
