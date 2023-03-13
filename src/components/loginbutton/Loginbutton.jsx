import React from 'react';
import './loginbutton.css';

const Loginbutton = () => {
  return (
    <div className="klg__login section__padding" style={{ margin: "0rem 10rem 2rem 15rem"}}>
    <div className="klg__login-content" style={{ position:"relative", left:"5rem"}}>
        <h1>Login</h1>
        <div className="klg__login-form" >
            <form>
            <div className="klg__login-form__div" style={{ position:"relative", left:"5rem" }}>
                
                <p><b>EmailId</b></p>
            </div>   
            
            <div className="field" style={{ margin: "auto 5rem 2rem 5rem"}}>
                <input type="text" name="email" />
            </div>
            
            <div className="klg__login-form__div" style={{ position:"relative", left:"5rem"}}>
                <p><b>Password</b></p>
            </div>
            <div className="field"  style={{ margin: "5erm 5rem 2rem 5rem"}}>
                <input
                type="password"
                label="Field label"
                />
        
            </div>
            <div className="klg__login-form__div" style={{ position:"relative", left:"5rem"}}> 
                <p>Forgot Password?</p>
            </div>
            <button type="button" style={{ position:"relative", left:"10rem"}}><a href="/login"> Login</a></button>   
            </form>
        
        </div>
           
   
    </div>
  </div>
  )
}

export default Loginbutton;
