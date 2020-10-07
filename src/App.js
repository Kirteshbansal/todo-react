import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Todos from "./components/Todos";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectsData: {},
      selectedProjectId: "",
      newProjectName: "",
    };
  }

  handleInputProject = (event) => {
    event.preventDefault();
    const newProjectName = this.state.newProjectName;
    let projectsNames = this.projectPresence(newProjectName);
    if (newProjectName === "" || newProjectName === null) {
      alert(`Please enter a valid project name.`);
    } else if (projectsNames.indexOf(newProjectName) !== -1) {
      alert(`A project with same name already exists.`);
    } else {
      let key = Date.now();
      let data = { projectName: newProjectName, todos: [] };
      const projectDataState = { ...this.state.projectsData };
      projectDataState[key] = data;
      this.setState({ projectsData: projectDataState, newProjectName: "" });
    }
  };

  handleInputProjectName = (e) => {
    const newProjectName = e.target.value;
    this.setState({
      newProjectName,
    });
  };

  handleSelectedProject = (e) => {
    const Id = e.target.options[e.target.selectedIndex].dataset.projectid;
    this.setState({
      selectedProjectId: Id,
    });
  };

  handleDeleteProject = () => {
    const selectedProjectId = this.state.selectedProjectId;
    let projectDataState = { ...this.state.projectsData };
    const projectIds = Object.keys(projectDataState);
    if (projectIds.indexOf(selectedProjectId) !== -1) {
      delete projectDataState[selectedProjectId];
    }
    this.setState({
      projectsData: projectDataState,
      selectedProjectId: "",
    });
  };

  projectPresence = (projectName) => {
    const project = Object.values(this.state.projectsData)
      .filter((p) => p.projectName === projectName)
      .map((p) => p.projectName);
    return project;
  };

  handleInputTodo = (e) => {
    e.preventDefault();
    const todoName = e.target[0].value;
    const selectedProjectId = this.state.selectedProjectId;
    let projectDataState = { ...this.state.projectsData };
    if (this.state.selectedProjectId !== "") {
      if (todoName !== "" && todoName !== null) {
        let todoId = Date.now();
        let todoData = { todoId: todoId, todoName: todoName, completed: false };
        projectDataState[selectedProjectId].todos.push(todoData);
        this.setState({
          projectsData: projectDataState,
        });
        e.target[0].value = "";
      } else {
        alert(`Please enter a valid todo name.`);
      }
    } else {
      alert(`Select a project first.`);
    }
  };

  handleTodoStatus = (e) => {
    let todoId = e.target.parentElement.getAttribute("id");
    const selectedProjectId = this.state.selectedProjectId;
    let projectDataState = { ...this.state.projectsData };
    const todo = projectDataState[selectedProjectId].todos.filter(
      (t) => Number(t.todoId) === Number(todoId)
    )[0];
    todo.completed ? (todo.completed = false) : (todo.completed = true);
    this.setState({
      projectsData: projectDataState,
    });
  };

  handleDeleteTodo = (e) => {
    let todoId = Number(e.target.parentElement.getAttribute("id"));
    const selectedProjectId = this.state.selectedProjectId;
    let projectDataState = { ...this.state.projectsData };
    const todos = projectDataState[selectedProjectId]["todos"].filter(
      (t) => Number(t.todoId) !== todoId
    );
    projectDataState[selectedProjectId]["todos"] = todos;
    this.setState({
      projectsData: projectDataState,
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <div className="d-md-flex justify-content-md-between flex-md-row">
            <Projects
              inputProject={this.handleInputProjectName}
              addProject={this.handleInputProject}
              stateData={this.state}
              onDelete={this.handleDeleteProject}
              onSelect={this.handleSelectedProject}
            />
            <Todos
              addTodo={this.handleInputTodo}
              stateData={this.state}
              todoStatus={this.handleTodoStatus}
              onDelete={this.handleDeleteTodo}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
