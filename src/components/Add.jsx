import { useState, useEffect } from "react";
import { addStusvalue, setStusbayId, editStatuslist } from "../api/setuApi";
import { useNavigate, useParams } from "react-router-dom"; // useNavigate 用于跳转
function Add() {
  const [status, setStatus] = useState({
    name: "",
    age: "",
    phone: "",
    email: "",
    education: "鬼王",
    graduationschool: "",
    profession: "",
    profile: "",
  });
  const userNavigate = useNavigate();
  const { id } = useParams();
  function updateValue(e, type) {
    if (type === "age" && isNaN(e)) {
      return;
    }
    const value = { ...status };
    value[type] = e;
    setStatus(value);
  }
  useEffect(() => {
    if (id) {
      setStusbayId(id).then((res) => {
        setStatus(res);
      });
    }
  }, [id]);
  function subitInfo(e) {
    e.preventDefault();
    Object.keys(status).forEach((key) => {
      if (status[key] === "") {
        alert("请补充");
        return 1;
      }
    });
    if (id) {
      editStatuslist(id, status).then(() => {
        userNavigate("/home", {
          state: {
            alert: "用户修改成功",
            type: "success",
          },
        });
      });
    } else {
      addStusvalue(status).then(() => {
        userNavigate("/home", {
          state: {
            alert: "用户添加成功",
            type: "success",
          },
        });
      });
    }
  }
  const addElement = (
    <div className="container">
      <h1 className="page-header">{id ? "修改信息" : "添加用户"}</h1>
      <form id="myForm" onSubmit={subitInfo}>
        <div className="well">
          <div className="form-group">
            <label>姓名</label>
            <input
              type="text"
              value={status.name}
              onChange={(e) => updateValue(e.target.value, "name")}
              className="form-control"
              placeholder="请填写用户姓名"
            />
          </div>
          <div className="form-group">
            <label>想要的年龄</label>
            <input
              type="text"
              value={status.age}
              onChange={(e) => updateValue(e.target.value, "age")}
              className="form-control"
              placeholder="请填写用户年龄"
            />
          </div>
          <div className="form-group">
            <label>阴间电话</label>
            <input
              type="text"
              value={status.phone}
              onChange={(e) => updateValue(e.target.value, "phone")}
              className="form-control"
              placeholder="请填写用户阴间电话"
            />
          </div>
          <div className="form-group">
            <label>阴间邮箱地址</label>
            <input
              type="text"
              value={status.email}
              onChange={(e) => updateValue(e.target.value, "email")}
              className="form-control"
              placeholder="请填写用户阴间邮箱地址"
            />
          </div>
          <div className="form-group">
            <label>级别</label>
            <select
              value={status.education}
              onChange={(e) => updateValue(e.target.value, "education")}
              className="form-control"
            >
              <option>鬼兵</option>
              <option>鬼将</option>
              <option>鬼帅</option>
              <option>鬼王</option>
              <option>鬼皇</option>
              <option>鬼帝</option>
              <option>鬼圣</option>
            </select>
          </div>
          <div className="form-group">
            <label>毕业于哪个省份鬼校</label>
            <input
              type="text"
              value={status.graduationschool}
              onChange={(e) => updateValue(e.target.value, "graduationschool")}
              className="form-control"
              placeholder="请填写用户省份鬼校"
            />
          </div>
          <div className="form-group">
            <label>生前职业</label>
            <input
              type="text"
              value={status.profession}
              onChange={(e) => updateValue(e.target.value, "profession")}
              className="form-control"
              placeholder="请填写用户生前从事的相关职业"
            />
          </div>
          <div className="form-group">
            <label>个人简介</label>
            <textarea
              value={status.profile}
              onChange={(e) => updateValue(e.target.value, "profile")}
              className="form-control"
              placeholder="请简单介绍一下你自己"
              rows="10"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            {id ? "确认修改" : "确认添加"}
          </button>
        </div>
      </form>
    </div>
  );
  return addElement;
}

export default Add;
