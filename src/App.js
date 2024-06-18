import './App.css';
import ShowUser from './components/ShowUser';
import { FaGithub } from "react-icons/fa";

function App() {
  return (
    <div className="App">
    <div className='container_title_search'>
    <a href='/' className='title_search'>
      <h1>Tìm Kiếm Người Dùng Github</h1>
      <div className='icon_github'><FaGithub/></div>
    </a>
    </div>
      <ShowUser />
    </div>
  );
}

export default App;
