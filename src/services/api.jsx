import axios from 'axios'
import { getUserData } from './storage';

axios.defaults.baseURL='https://identitytoolkit.googleapis.com/v1';
const Api_Key = 'AIzaSyCL9T-jBIuwU11HIE1wIOciup5D0WUJoNk';
const Register_Url = `/accounts:signUp?key=${Api_Key}`;

const Login_Url = `/accounts:signInWithPassword?key=${Api_Key}`;

const UserDetails_Url = `/accounts:lookup?key=${Api_Key}`;
export const RegisterApi = (inputs) =>{
    let data = {email:inputs.email , password : inputs.password};
    return axios.post(Register_Url,data);
}

export const LoginApi = (inputs) =>{
    let data = {email:inputs.email , password : inputs.password};
    return axios.post(Login_Url,data);
}

export const UserDetailsApi =()=>{
    let data={idToken:getUserData()};
    return axios.post(UserDetails_Url,data);
}