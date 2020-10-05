import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Projects from "./components/Projects";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleInputProject = (event) => {
    event.preventDefault();
    const projectName = event.target[0].value;
    let projectsNames = this.projectPresence(projectName);
    if (projectName === "" || projectName === null) {
      alert(`Please enter a valid project name.`);
    } else if (projectsNames.indexOf(projectName) !== -1) {
      alert(`A project with same name already exists.`);
    } else {
      let key = Date.now();
      let data = { projectName: projectName, todos: [] };
      this.setState({ [key]: data }, () =>
        console.log("App State", this.state)
      );
    }
  };

  projectPresence = (projectName) => {
    const project = Object.values(this.state)
      .filter((p) => p.projectName === projectName)
      .map((p) => p.projectName);
    return project;
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <div className="d-md-flex justify-content-md-between flex-md-row">
            <Projects
              addProject={this.handleInputProject}
              stateData={this.state}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
