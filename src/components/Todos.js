import React, { Component } from "react";

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { addTodo, stateData } = this.props;
    const selectedProjectId = stateData.selectedProjectId;
    const projectsData = stateData.projectsData;
    const projectName = Object.entries(projectsData)
      .filter((p) => p[0] === selectedProjectId)
      .map((p) => p[1]["projectName"])[0];

    let displayTodos;
    if (selectedProjectId) {
      const { todos } = projectsData[selectedProjectId];
      displayTodos = todos.map((t) => {
        const status = t.completed ? "Undone" : "Done";
        return (
          <div
            key={t.todoId}
            data-id={t.todoId}
            className="d-flex justify-content-between align-items-center m-1 mt-2 border border-info rounded p-2"
          >
            <p className="text-white text-size m-0">{t.todoName}</p>
            <div data-id={t.todoId} className="buttons">
              <button
                type="button"
                className="btn btn-sm btn-outline-success done-todo mr-1"
              >
                {status}
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-info edit-todo mr-1"
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-danger delete-todo"
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
                id="todo-input"
                className="form-control"
                maxLength="20"
                placeholder="Enter new todo"
                aria-label="new todo name"
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
          <hr className="border-white" />
          <div className="container d-flex justify-content-center">
            <h3 className="col-md-6 text-white text-300 ">Project:</h3>
            <h3
              className="list-title text-white col-md-6 text-300 "
              id="project-todo-list"
            >
              {selectedProjectId ? projectName : "Not selected"}
            </h3>
          </div>

          <div className="list-group" id="todos">
            {displayTodos}
          </div>
        </div>
      </div>
    );
  }
}

export default Todos;
