import React from "react";

const CompletedTodos = (props) => {
  const { todosData, todoDelete, todoEdit, markComplete } = props;
  const selectedProjectId = todosData.selectedProjectId;
  const projectsData = todosData.projectsData;
  const { todos } = projectsData[selectedProjectId];
  const displayTodos = todos.map((t) => {
    let status = t.completed ? "Undone" : "Done";
    if (t.completed) {
      return (
        <div
          key={t.todoId}
          data-id={t.todoId}
          className="d-flex justify-content-between align-items-center m-1 mt-2 border border-info rounded p-2"
        >
          <p className="text-white text-size m-0">{t.todoName}</p>
          <div>
            <button
              type="button"
              id={t.todoId}
              className="btn btn-sm btn-outline-success done-todo mr-1"
              onClick={markComplete}
            >
              {status}
            </button>
            <button
              type="button"
              id={t.todoId}
              className="btn btn-sm btn-outline-info edit-todo mr-1"
              data-toggle="modal"
              data-target="#exampleModalCenter"
              onClick={todoEdit}
            >
              Edit
            </button>
            <button
              type="button"
              id={t.todoId}
              className="btn btn-sm btn-outline-danger delete-todo"
              onClick={todoDelete}
            >
              Delete
            </button>
          </div>
        </div>
      );
    } else {
      return null;
    }
  });
  return <>{displayTodos}</>;
};

export default CompletedTodos;
