import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
    let {title, body} = props
    return ReactDOM.createPortal(
        <div className="modal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">{body}</div>
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    )
}

export default Modal;