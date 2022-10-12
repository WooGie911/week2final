import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const MyPage = () => {
  const paramID = useParams();
  const todoList = useSelector((state) => state.todolist.user);
  const indexId = todoList.findIndex((user) => {
    if (user.id == paramID.id) {
      return true;
    }
    return false;
  });

  return (
    <div>
      <Link to="/">
        <button className="todo-delete-button button">이전으로</button>
      </Link>

      <h2>ID : {paramID.id}</h2>
      <div>
        <h2> {todoList[indexId].title} </h2>
        <div> {todoList[indexId].body} </div>
      </div>
    </div>
  );
};

export default MyPage;
