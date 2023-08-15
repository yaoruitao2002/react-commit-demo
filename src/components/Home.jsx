import { useEffect, useState } from "react";
import { getStulist } from "../api/setuApi.js";
import Toset from "./Alert.jsx";
import { useLocation, NavLink } from "react-router-dom"; // NavLink 声明式跳转 useLocation 拿到useNavigate 传递过来的参数
function Home() {
  const [dataLsit, SetdataList] = useState([]);
  const [search, setSearch] = useState("");
  const [alerts, setAlert] = useState(null);
  const loCation = useLocation();

  useEffect(() => {
    async function getList() {
      const data = await getStulist();
      SetdataList(data);
    }
    getList();
  }, []);
  useEffect(() => {
    console.log(loCation.state);
    setAlert(loCation.state);
  }, [loCation]);
  function changHome(e) {
    setSearch(e.target.value);
  }

  const TrList = dataLsit.map((item, index) => {
    return (
      <tr key={index}>
        <td>{item.name}</td>
        <td>{item.age}</td>
        <td>{item.phone}</td>
        <td>{item.education}</td>
        <td>
          <NavLink to={`/Detalall/${item.id}`}>详情</NavLink>
        </td>
      </tr>
    );
  });
  const getSublit = () => {
    if(!search){
      getStulist().then((data)=>{
        SetdataList(data);
      })
    }
    const arr = [];
    dataLsit.forEach((item) => {
      if (item.name === search) {
        arr.push(item);
      }
    });
    SetdataList(arr);
  };
  const alertStatus = alerts ? <Toset {...alerts} /> : null;
  const HomeList = (
    <div>
      {alertStatus}
      <h1>地府人员列表</h1>
      <div style={{ display: "flex" }}>
        <input
          type="text"
          className="form-control"
          placeholder="搜索"
          value={search}
          onChange={changHome}
        ></input>
        <button
          className="btn btn-primary"
          style={{ margin: "0 0 0 20px" }}
          onClick={() => getSublit()}
        >
          搜索
        </button>
      </div>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>姓名</th>
            <th>年龄</th>
            <th>联系方式</th>
            <th>鬼之气</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>{TrList}</tbody>
      </table>
    </div>
  );
  return HomeList;
}

export default Home;
