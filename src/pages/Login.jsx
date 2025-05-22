import Logo from '../assets/logo.svg';
import '../css/login.css'
import { useState } from 'react';
import { LoginApi, RegisterApi } from '../services/api';
import {isAuthenticated} from '../services/Auth';
import { Navigate } from 'react-router-dom';
import { storeUserData } from '../services/storage';
export default function Login() {

    const initialStateErrors ={
        email: { required: false },
        password: { required: false },
        custom_error: null
    };
    const [errors, setErrors] = useState(initialStateErrors);

    const [loading, setLoading] = useState(false);

    const handleSubmit = (event)=>{
        event.preventDefault();
        let errors=initialStateErrors;
        let hasError = false;
        if(inputs.password == ''){
            errors.password.required = true;
            hasError = true;
        }
        if(!hasError){
            setLoading(true);

            // // RegisterApi Call
            // RegisterApi(inputs).then((responce)=>{
            //     storeUserData(responce.data.idToken);
            // }).catch((err)=>{
            //     console.log(err);
            // }).finally(()=>{
            //     setLoading(false);
            // })

            //Login Api Call
            LoginApi (inputs).then((responce)=>{
                storeUserData(responce.data.idToken);
            }).catch((err)=>{
                setErrors({...errors,custom_error:"Invalid Password or Email"})
            }).finally(()=>{
                setLoading(false);
            })

        }
        setErrors({...errors});
    }

    const [inputs,setInputs] = useState({
        email:'',
        password:'',
    })

    const handleInputChange = (event) =>{
        setInputs({...inputs,[event.target.name]:event.target.value})
    }

    if(isAuthenticated()){
        return <Navigate to="/Source_dashboard"/>
    }
    

    return (
        <div className=" w-100 d-flex justify-content-center vh-100 align-items-center bg-section">
            <div style={{ width: 550 + 'px' }} className=' border rounded-2 p-2 shadow-lg bg-white bg-opacity-75 backdrop-blur le'>
                <div className='d-flex flex-column align-items-center mt-5 mb-3'>
                    <img width={200 + "px"} src={Logo} alt="" className='mb-3' />
                    <h1 className='fs-2'>Login</h1>
                </div>
                <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
                    <div className="mb-3 w-75">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" onChange={handleInputChange} aria-describedby="emailHelp" name='email' required />

                        {/* {errors.email.required ?
                            (<span className='text-danger'>
                                Email is required
                            </span>) : null
                        } */}
                    </div>
                    <div className="mb-4 w-75">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" onChange={handleInputChange} name='password'  />
                        {
                            errors.password.required ?
                                (<span className='text-danger'>
                                    Password is required
                                </span>) : null
                        }
                    </div>
                    {errors.custom_error ?
                        (<span className='text-danger'>
                            {errors.custom_error}
                        </span>) : null
                    }
                    <a href=''>Forget Password</a>
                    { loading ?
                    (<div className='text-center'>
                        <div className='spinner-border text-primary' role='status'>
                            <span className='visually-hidden'>Loading...</span>
                        </div>
                    </div>):null
}
                    <button type="submit" id='button' className="btn my-3 w-25" disabled={loading}>Login</button>
                </form>
            </div>
        </div>
    )
}