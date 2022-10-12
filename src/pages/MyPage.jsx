import React from "react";
import { Link, useParams } from "react-router-dom";
const MyPage = () => {
  const paramID = useParams();

  return (
    <div>
      <div>
        <Link to="/">
          <button className="todo-delete-button button">이전으로</button>
        </Link>
      </div>
      <label>ID : </label>
    </div>
  );
};

export default MyPage;
