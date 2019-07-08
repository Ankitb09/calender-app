import React, { Component } from 'react';
import Modal from "./helpers/Modal";

const AddEditForm = (props) => {
    let modalBody = renderModalBody(props);
    let { title, body, actions } = props
    return (
        <Modal
            title={title}
            body={modalBody}
        />
    )
}

const renderModalBody = (props) => {

    return <form onSubmit={props.onFormSubmit}>
        <div className="form-group">
            <input type="text" defaultValue="" name="title" placeholder="Add Event Title" className="form-control" />
        </div>
        <div className="form-group">
            <input type="text" defaultValue="" name="description" placeholder="Add Event Description (max 300 characters)" className="form-control" />
        </div>
        <div className="form-group">
            <input type="time" defaultValue="14:45" name="time" className="form-control" />
        </div>
        <div className="form-group">
            <input type="color" defaultValue="#ff0000" name="color" className="form-control" />
        </div>
        <div className="form-group">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="submit" className="btn btn-primary">Save changes</button>
        </div>
    </form>
}

export default AddEditForm;