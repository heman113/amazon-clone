import React from 'react'
import './Login.css'
import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react';
import { auth } from './firebase';
import { useRef } from 'react';

function Login() {
    const navigate = useNavigate();
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(emailRef.current.value,passwordRef.current.value).then((res)=>{
            console.log(res);
            if(res){
                navigate("/")
            }
        }).catch(error => alert(error.messsage))
    }
    const signUp = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(emailRef.current.value,passwordRef.current.value).then((res)=>{
            console.log(res);
            if(res){
                navigate("/")
            }
        }).catch(error => alert(error.messsage))
    }
  return (
    <div className='login'>
          <Link to="/">
              <img className='login-logo' src='/images/amazon.png' />
          </Link>
          <div className='login-container'>
            <h1>
                Sign-in
            </h1>
            <form>
                <h5>E-mail</h5>
                <input type='email' ref={emailRef} />
                <h5>Password</h5>
                <input type='password' ref={passwordRef} />
                <button type='submit' onClick={signIn} className='login-btn'>Sign in</button>
            </form>
            <p>
                By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
            </p>
            <button onClick={signUp} className='signup-btn'>Create your Amazon account</button>
          </div>
    </div>
  )
}

export default Login