import React, { useState } from 'react';
import './Login.css'


const Login = () => {

    const [action, setAction] = useState("Log in");
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const reset = () => {
        setName('')
        setEmail('')
        setPass('')
    }
    
    const submitHandler = (e) => {
        e.preventDefault();
        alert(`Welcome ${name}.....Your Email is (${email}) and Pass is (${pass})`);
        reset();
        
    }

    const clickHere = () => {
        alert(`Cry More......You Stupid ,Lifeless Mada*Faka**`)
    }
    return (
        <>
            <form onSubmit={submitHandler}>
                <div className='container'>
                    <div className="header">
                        <h2 className='head-text'>{action}</h2>
                        <div className='underline'></div>
                    </div>

                    <div className='inputs'>
                        {action==="Log in"?<div></div>:<div className="input">
                            <input type="text" placeholder='Enter Name'
                            value={name}
                            onChange={(e)=>setName(e.target.value)} required/>
                        </div>}
                        
                        <div className="input">                           
                            <input type="email" placeholder='Enter Email'
                                value={email}
                            onChange={(e)=>setEmail(e.target.value)}    required />
                        </div>
                        <div className="input">                   
                            <input type="password" placeholder='Enter Password'
                                value={pass}
                                onChange={(e)=>setPass(e.target.value)}required />
                        </div>
                    </div>
                    {action==="Sign Up"?<div></div>:<div className="forget">
                        <p className="forget-pass">Forget Password? <a onClick={clickHere}>Click Here</a></p>
                    </div>}
                    

                    <div className="buttons">
                        <button className={action === "Log in" ? "submit display" : "submit"}>Sign Up</button>
                        <button className={action === "Sign Up" ? "submit display" : "submit"}>Log in</button>
                    </div>

                    <div >
                        <p
                            className="footer"
                            onClick={() => setAction(action==="Sign Up"?"Log in":"Sign Up")}>
                            {action === "Sign Up" ? "Log in" : "Sign Up"}
                        </p>
                    </div>

                </div>
            </form>
            
        </>
    );
};

export default Login;