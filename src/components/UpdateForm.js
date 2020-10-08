import React from "react";

function UpdateForm(props) {
  const { todoValue, getValue, id, submitValue } = props;
  return (
    <div
      className="modal fade"
      id="exampleModalCenter"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-dark" id="exampleModalLongTitle">
              Update Todo
            </h5>
          </div>
          <div className="modal-body">
            <form action="">
              <input
                type="text"
                className="form-control"
                maxLength="20"
                placeholder="Update todo"
                aria-label="new todo name"
                value={todoValue}
                onChange={getValue}
              />
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              type="submit"
              className="btn btn-success"
              id="save-changes"
              data-dismiss="modal"
              onClick={submitValue}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateForm;
