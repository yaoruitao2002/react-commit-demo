import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { setStusbayId, deleteList } from "../api/setuApi";
// useParams 动态获取到router 传递过来的参数是一个对象
function Detalall() {
  const { id } = useParams();
  const [data, setDatas] = useState({});
  useEffect(() => {
    setStusbayId(id).then((res) => {
      setDatas(res);
    });
  }, [id]);
  const navGeta = useNavigate();

  const deleteListname = () => {
    if (window.confirm(`是否刪除${data.name}`)) {
      deleteList(data.id).then((res) => {
        navGeta("/home", {
          state: {
            alert: `删除${data.name}成功`,
            type: "info",
          },
        });
      });
    } else {
    }
  };
  return (
    <div className="details container">
      <button className="btn btn-default" onClick={() => navGeta("/home")}>
        返回
      </button>
      <span className="pull-right">
        <button
          className="btn btn-primary"
          onClick={() => navGeta(`/edit/${data.id}`)}
          style={{ marginRight: 10 }}
        >
          修改
        </button>
        <button className="btn btn-danger" onClick={() => deleteListname()}>
          删除
        </button>
      </span>
      <h1 className="page-header">
        {data.name}
        <ul className="list-group">
          <li className="list-group-item">
            <span className="glyphicon glyphicon-phone"></span>
            <span>电话：{data.phone}</span>
          </li>
          <li className="list-group-item">
            <span className="glyphicon glyphicon-envelope"></span>
            <span> 邮箱：{data.email}</span>
          </li>
        </ul>
        <ul className="list-group">
          <li className="list-group-item">
            <span className="glyphicon glyphicon-book"></span>
            <span>水平：{data.education}</span>
          </li>
          <li className="list-group-item">
            <span className="glyphicon glyphicon-flag"></span>
            <span>毕业院校：{data.graduationschool}</span>
          </li>
          <li className="list-group-item">
            <span className="glyphicon glyphicon-briefcase"></span>
            <span> 专业：{data.profession}</span>
          </li>
          <li className="list-group-item">
            <span className="glyphicon glyphicon-user"></span>
            <span>个人简介：{data.profile}</span>
          </li>
        </ul>
      </h1>
    </div>
  );
}

export default Detalall;
