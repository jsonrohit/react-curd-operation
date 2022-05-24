import React,{useState}from "react";
import './form.css';

const Form = (props) => {
    const [name,nameState] = useState('');
    const [email,emailState] = useState('');
    const [mobile,mobileState] = useState('');

    const nameInput = (event) => {
        nameState(event.target.value)
    }

    const emailInput = (event) => {
        emailState(event.target.value)
    }

    const mobileInput = (event) => {
        mobileState(event.target.value)
    }

    const formSubmit = (event) =>{
        event.preventDefault();
        if(name != '' && name != undefined){
        props.formData({id:Math.random().toFixed(3),'name':name,'mobile':mobile,'email':email});
        nameState('')
        emailState('')
        mobileState('')
        }else{
            alert('all field required');
        }
    }

    




    return(
        <div>
            <form onSubmit={formSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" value={name} onChange={nameInput}/>
                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="text" className="form-control" value={email} onChange={emailInput}/>
                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Mobile</label>
                    <input type="text" className="form-control" value={mobile} onChange={mobileInput} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Form;