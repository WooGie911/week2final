import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { userRevise, deleteData } from "../../redux/modules/todolist";
import "./style.css";
import { Link } from "react-router-dom";

const List = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todolist.user);
  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  const onDeleteHanlder = (todoId) => {
    dispatch(deleteData(todoId));
  };
  const onEditHandler = (todoId) => {
    dispatch(userRevise(todoId));
  };

  return (
    <div className="list-container">
      <h2 className="list-title">μ§νμ€.. π₯</h2>
      <div className="list-wrapper">
        {todoList.map((todo1, index) => {
          if (!todo1.isDone) {
            return (
              <div key={index} className="todo-container">
                <Link className="goMypage" to={`detailpage/${todo1.id}`}>
                  μμΈλ³΄κΈ°
                </Link>
                <div>
                  <h2 className="todo-title">{todo1.title}</h2>
                  <div>{todo1.body}</div>
                </div>
                <div className="button-set">
                  <button
                    className="todo-delete-button button"
                    onClick={() => onDeleteHanlder(todo1.id)}
                  >
                    μ­μ νκΈ°
                  </button>
                  <button
                    className="todo-complete-button button"
                    onClick={() => onEditHandler(todo1.id)}
                  >
                    {todo1.isDone ? "μ·¨μ" : "μλ£"}
                  </button>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
      <h2 className="list-title">λ!!! π</h2>
      <div className="list-wrapper">
        {todoList.map((todo1, index) => {
          if (todo1.isDone) {
            console.log(todo1);
            return (
              <div key={index} className="todo-container">
                <div>
                  <Link className="goMypage" to={`detailpage/${todo1.id}`}>
                    μμΈλ³΄κΈ°
                  </Link>
                  <h2 className="todo-title">{todo1.title}</h2>
                  <div>{todo1.body}</div>
                </div>
                <div className="button-set">
                  <button
                    className="todo-delete-button button"
                    onClick={() => onDeleteHanlder(todo1.id)}
                  >
                    μ­μ νκΈ°
                  </button>
                  <button
                    className="todo-complete-button button"
                    onClick={() => onEditHandler(todo1.id)}
                  >
                    {todo1.isDone ? "μ·¨μ" : "μλ£"}
                  </button>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default List;
