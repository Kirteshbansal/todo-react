import React, { Component } from "react";
import CompletedTodos from "./CompletedTodos";
import UpdateForm from "./UpdateForm";

class Todos extends Component {
  render() {
    const {
      inputTodo,
      addTodo,
      stateData,
      todoStatus,
      onDelete,
      filterTodos,
      editTodo,
      newTodoValue,
      submitEditedTodo,
    } = this.props;
    const selectedProjectId = stateData.selectedProjectId;
    const projectsData = stateData.projectsData;
    const projectName = Object.entries(projectsData)
      .filter((p) => p[0] === selectedProjectId)
      .map((p) => p[1]["projectName"])[0];
    const allTodos = projectsData[selectedProjectId].todos.length;
    const completedTodos = projectsData[selectedProjectId].todos.filter(
      (t) => t.completed
    ).length;

    let displayTodos;
    if (selectedProjectId) {
      const { todos } = projectsData[selectedProjectId];
      displayTodos = todos.map((t) => {
        let status = t.completed ? "Undone" : "Done";
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
                onClick={todoStatus}
              >
                {status}
              </button>
              <button
                type="button"
                id={t.todoId}
                className="btn btn-sm btn-outline-info edit-todo mr-1"
                data-toggle="modal"
                data-target="#exampleModalCenter"
                onClick={editTodo}
              >
                Edit
              </button>
              <button
                type="button"
                id={t.todoId}
                className="btn btn-sm btn-outline-danger delete-todo"
                onClick={onDelete}
              >
                Delete
              </button>
            </div>
          </div>
        );
      });
    }

    return (
      <div className="col-md-6 p-5 mx-auto my-3">
        <h2 className="task-list-title text-white text-center p-2 text-300 ">
          My Todos
        </h2>
        <div id="todo-container">
          <div>
            <form action="" onSubmit={addTodo}>
              <input
                type="text"
                className="form-control"
                maxLength="20"
                placeholder="Enter new todo"
                aria-label="new todo name"
                value={stateData.newTodoName}
                onChange={inputTodo}
              />
              <button
                type="submit"
                className="btn btn-block btn-outline-info my-3"
                aria-label="create new todo"
              >
                Add
              </button>
            </form>
          </div>
          <hr className="border-white mb-2" />
          <div className="container d-flex justify-content-center my-2">
            <h4 className="col-md-6 text-white text-300 mb-0">Project:</h4>
            <h4 className="list-title text-white col-md-6 text-300 mb-0">
              {selectedProjectId ? projectName : "Not selected"}
            </h4>
          </div>
          <UpdateForm
            todoValue={stateData.updateTodo}
            getValue={newTodoValue}
            submitValue={submitEditedTodo}
            id={stateData.selectedTodoId}
          />
          <div className="container d-flex align-items-center justify-content-around">
            <div className="my-1">
              <p className="badge badge-pill badge-success mb-0 mr-1">
                Completed Tasks: {completedTodos}
              </p>
              <p className="badge badge-pill badge-info mb-0">
                Total Tasks: {allTodos}
              </p>
            </div>
            <div className="form-group form-check d-flex justify-content-center my-3">
              <div>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-warning text-300"
                  onClick={filterTodos}
                >
                  {stateData.show ? "Show All Todos" : "Show Completed Todos"}
                </button>
              </div>
            </div>
          </div>
          <hr className="border-white mt-2" />
          <div className="list-group" id="todos">
            {stateData.show === false ? (
              displayTodos
            ) : completedTodos > 0 ? (
              <CompletedTodos
                todosData={stateData}
                todoDelete={onDelete}
                todoEdit={editTodo}
                markComplete={todoStatus}
              />
            ) : (
              <h4>Opps! No task is completed.</h4>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Todos;
