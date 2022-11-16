import React, { useState, useEffect, useRef, useContext } from "react";
import EyeOpen from '../../Assets/eye-regular.svg'
import EyeClose from '../../Assets/eye-slash-regular.svg'

const Login = () => {

    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
 
    const [passwordError, setPasswordError] = useState(false);
    const [showPassword, setPasswordShow] = useState(false);
    

    const handleEmailAddress = (e) => {
        let userName  = e.target.value.trim();
        setEmailAddress(userName);

    };

    const handlePassword = (e) => {
        let password  = e.target.value;
      
        setPassword(password);

    };

    const checkEmail = (emailAddress) => {
		let emailAddressPattern = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		)
		return emailAddressPattern.test(emailAddress);
	}

    return (
        <Context.Consumer>
            {(context) => (
                <div className='login-container center'>
                    <div className='form-container '>
                        <div className='center login-ttl'>
                            Login
                        </div>

                        <div className='center' style={{ marginTop: '30px' }}>
                            <div className='input-container '>
                                <div>
                                    <div class="form-floating mb-3" >
                                        <input type="email"
                                            class="form-control "
                                            id="floatingInput"
                                            placeholder="name@example.com"
                                            onChange={(e) => {
                                                handleEmailAddress(e)
                                            }}
                                            required />
                                        <label for="floatingInput">Email Address</label>
                                    </div>
                                </div>

                            </div>
                        </div>



                        <div className='center'>
                            <div className='input-container '>
                                <div>
                                    <div class="form-floating mb-3 " style={{ display: 'flex' }} >

                                        <input type={showPassword?'text':'password'}
                                            class="form-control"
                                            id="floatingInput"
                                            placeholder="name@example.com" required
                                            onChange={(e) => {
                                                handlePassword(e)
                                            }} />

                                        <label for="floatingInput">Password</label>
                                        {showPassword ?
                                            <img src={EyeClose} className='icon' onClick={() => {
                                                setPasswordShow(false)
                                            }} />
                                            :
                                            <img src={EyeOpen} className='icon' onClick={() => {
                                                setPasswordShow(true)
                                            }} />
                                        }
                                    </div>

                                </div>

                            </div>
                        </div>

                        {passwordError ? <div className='validation-txt '>! Please fill all fields</div> : ''}
                        {context.loginErr ? <div className='validation-txt '>! Login Error</div> : ''}





                        <div className='center' style={{ marginTop: '30px' }}>
                            <div className='login-btn center '
                                onClick={() => {
                                    if (emailAddress === "" || password === "") {
                                        setPasswordError(true);
                                    }
                                    else if(emailAddress !== "" && password !== ""){
                                        context?.Login(emailAddress,password);
                                    }
                                }}>
                                Login
                            </div>
                        </div>



                    </div>

                </div>
            )}
        </Context.Consumer>
    )
}

export default Login