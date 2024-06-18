import React, { useState } from 'react';
import GetUser from './GetUser';
import axios from 'axios';

export default function ShowUser() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [msg, setMsg] = useState(null);

  const getUserDetails = async userName => {
    resetAll();
    try {
      const { data } = await axios(`https://api.github.com/users/${userName}`);
      setUser(data);
      getUserRepos(userName);
    } catch {
      setMsg(`Không Có Người Dùng Với Tên: ${userName}`);
    }
  };

  const getUserRepos = async userName => {
    try {
      const { data } = await axios(`https://api.github.com/users/${userName}/repos`);
      setRepos(data);
    } catch {
      setMsg(`Problem getting repos for user: ${userName} !`);
    }
  };

  const resetAll = () => {
    setUser(null);
    setRepos([]);
    setMsg('');
  };

  return (
    <>
      <GetUser onSearch={getUserDetails} />
      {user && (
        <div className="card">
          <h2 className="user-info">{user.name || user.login}</h2>
          <img className="avatar" src={user.avatar_url} alt={user.name} />

          <p>
            <strong>Bio : </strong>
            {user.bio}
          </p>
          <p>
            <strong>Location : </strong>
            {user.location}
          </p>
          <p>
            <strong> Followers : </strong>
            {user.followers}
            <strong> Following : </strong>
            {user.following}
            <strong> Repositories : </strong>
            {user.public_repos}
          </p>
          <ul>
            {/* {repos.map((repo, index) => (
              <a href={repo.html_url} target="_blank" rel="noreferrer">
                <li className="repo" key={index}>
                  {repo.name}
                  <h5> → {repo.language}</h5>
                </li>
              </a>
            ))} */}
            {repos.map((repo, index) => (
  <a href={repo.html_url} target="_blank" rel="noreferrer" key={index}>
    <li className="repo">
      {repo.name}
      <h5> → {repo.language ? repo.language : "Chưa xác định được ngôn ngữ"}</h5>
    </li>
  </a>
))}
          </ul>

          <button onClick={resetAll}>Trở Về Trang Tìm Kiếm</button>
        </div>
      )}
      {msg && (
        <div className="card">
          <h3>{msg}</h3>
        </div>
      )}
      <div className='container_myname2'>
          <h1 className='container_myname'>&copy; Mọi Bản Quyền Thuộc Về<span className='myname'>Huỳnh Vĩnh Tiến</span></h1>
      </div>
    </>
  );
}
