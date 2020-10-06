import React, { Component } from "react";

class Projects extends Component {
  render() {
    const { addProject, stateData, onDelete, onSelect } = this.props;
    const renderData = Object.entries(stateData["projectsData"]);
    const displayProjects = renderData.map((p) => {
      return (
        <option key={p[0]} value={p[1]["projectName"]} data-projectid={p[0]}>
          {p[1]["projectName"]}
        </option>
      );
    });

    return (
      <div className="col-md-6 p-5 mx-auto my-3">
        <h2 className="text-white text-center p-2 text-300">My Projects</h2>
        <form action="" onSubmit={addProject}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter new project"
            aria-label="new project name"
          />
          <button
            type="submit"
            className="btn btn-block btn-outline-info my-3"
            aria-label="create new project"
          >
            Add
          </button>
        </form>
        <hr className="border-white" />
        <div className="input-group">
          <select
            id="projects-list"
            className="custom-select text-dark"
            name="projects"
            onChange={onSelect}
          >
            <option key="dummy" value="" hidden>
              Select your project
            </option>
            {displayProjects}
          </select>
          <button
            type="button"
            className="btn btn-md btn-outline-danger ml-2 my-auto"
            aria-label="delete project"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Projects;
