import React, { Component } from "react";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { addProject, stateData } = this.props;
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
      </div>
    );
  }
}

export default Projects;
