import React, { useEffect, useState } from "react";
import './model.css';

const Model = (props) => {
    const [upId, upIdState] = useState();
    const [name, nameState] = useState();
    const [email, emailState] = useState();
    const [mobile, mobileState] = useState();

    useEffect(() => {
        if (props.edit) {
            nameState(props.edit.name);
            emailState(props.edit.email);
            mobileState(props.edit.mobile);
            upIdState(props.edit.id);
        }
    }, [props])


    const nameInput = (event) => {
        nameState(event.target.value)
    }

    const emailInput = (event) => {
        emailState(event.target.value)
    }

    const mobileInput = (event) => {
        mobileState(event.target.value)
    }

    const updateSubmit = (event) => {
        event.preventDefault();
        if (name != '' && name != undefined) {
            props.updateRecord({ id: upId, 'name': name, 'mobile': mobile, 'email': email });
            nameState('')
            emailState('')
            mobileState('')
            upIdState('')
        } else {
            alert('all field required');
        }
    }


    return (
        <div>
            {/* model */}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <form onSubmit={updateSubmit}>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                                    <input type="text" className="form-control" value={name} onChange={nameInput} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="text" className="form-control" value={email} onChange={emailInput} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Mobile</label>
                                    <input type="text" className="form-control" value={mobile} onChange={mobileInput} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Model;