import Home from "./components/Home";
import Add from "./components/Add";
import About from "./components/About";
import Detalall from "./components/Detall";
import { Route, Routes, Navigate, NavLink } from "react-router-dom"; 
// Navigate 重定向 到home  Navigate声明式跳转  Routes 根路由 Route 跳转
import "./css/App.css";
function App() {
  return (
    <div id="app" className="container">
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <div className="navbar-brand" >
              地府管理系统
            </div>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <NavLink to="/home" className="navigation">
                主页
              </NavLink>
              <NavLink to="/about" className="navigation">
                关于我们
              </NavLink>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <NavLink to="/add" className="navigation">
                添加用户
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
      <div className="content">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/about" element={<About />} />
          <Route path="/Detalall/:id" element={<Detalall />} />
          <Route path="/edit/:id" element={<Add />}/>
          <Route path="/" element={<Navigate replace to="/home" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
