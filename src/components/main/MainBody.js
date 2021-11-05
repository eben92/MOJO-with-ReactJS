import React from "react";
import { FaSearch } from "react-icons/fa";

const MainBody = () => {
  return (
    <>
      {/* top items */}
      <div className='select__template__container'>
        <h4 className='select__temp'>Select template</h4>
        <div className='right__search'>
          <label className='right__label'>
            <input
              type='text'
              placeholder='Search templates'
              className='right__search__input'
            />
            <button className='search__icon__btn'>
              <FaSearch className='search__icon__color' />
            </button>
          </label>
          <h5 className='btn__center new__documents__btn right__new__doc'>
            new document
          </h5>
        </div>
      </div>
      {/* end of top items */}

      {/* template field*/}
      <div className='template__field'></div>

      {/* end of template field*/}
    </>
  );
};

export default MainBody;
