import React from "react";
import { AiOutlineDown, AiOutlineUser } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";

const MainHeader = () => {
  return (
    <div className='main__header__container'>
      <div className='left__items'>
        <button className='btn__center new__documents__btn'>
          <FaPlus className='plus' /> <h5>new document</h5>
        </button>
        <button className='btn__center new__case__btn'>
          <FaPlus className='plus' /> <h5>New case</h5>
        </button>
        <button className='btn__center invite__btn'>
          <AiOutlineUser className='plus' /> <h5>invite team member</h5>
        </button>
      </div>
      <div className='right__items'>
        <div className='user__profile'>
          <h3 className='name'>ben dell</h3>
          <AiOutlineDown />
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
