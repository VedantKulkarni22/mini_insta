import React from 'react'
import "../Styles/Login.css"
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div>
            <div className="crd card text-center mx-auto mt-5 mb-3">
                <div className="card-body">
                    <Link to='/'><img className='InstaLogo img-fluid p-4' src='Images/InstaLogo.png' alt="instalogo"></img></Link>
                    <form className='px-4'>
                        <input className="form-control rounded-1 mb-2" type="text" placeholder="Phone number, username, or email" />
                        <input className="form-control rounded-1 mb-3" type="password" placeholder="Password" />
                        <button className='btn btn-primary loginbtn mb-4' type='submit'>Log in</button>
                        <div style={{ float: "left", width: "44%" }}><hr /></div>
                        <div style={{ float: "right", width: "44%" }}><hr /></div><span className='or'>OR</span>
                        <button className='fbloginbtn mt-4'><span><img src='Images/fblogo.png' alt='Facebook Logo' width="30px" height="30px"></img></span><span> Log in with Facebook </span></button>
                        <p><Link to='/comingsoon' className='forgotpass'>Forgot password?</Link></p>
                    </form>
                </div>
            </div>
            <div className="crd card text-center mx-auto mt- mb-3">
                <div className="card-body">
                    <div>Don't you have an account? <Link className='signuplnk' to='/signup'><span className='signuptxt'>Sign up</span></Link></div>
                </div>
            </div>
        </div>
    )
}
