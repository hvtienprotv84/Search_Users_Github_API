import React, { useState } from 'react';

export default function GetUser({ onSearch }) {
  const [userName, setUserName] = useState('');

  const handleChange = event => {
    const userName = event.target.value;
    setUserName(userName);
  };

  const handleClick = event => {
    event.preventDefault();
    userName.trim() && onSearch(userName.toLowerCase());
    setUserName('');
  };

  return (
    <div>
    <form onSubmit={handleClick}>
      <input className='search_user' type="text" placeholder="Tìm Kiếm Người Dùng Github nào!" onChange={handleChange} value={userName} />
      <button className='search_user' id='search_button' type="submit">Tìm Kiếm</button>
    </form>
      {/* <div className='container_myname2'>
          <h1 className='container_myname'>&copy; Mọi Bản Quyền Thuộc Về<span className='myname'>Huỳnh Vĩnh Tiến</span></h1>
      </div> */}
    </div>
  );
}
