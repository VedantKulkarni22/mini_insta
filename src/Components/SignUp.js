import React from 'react'
import '../Styles/SignUp.css'

export default function SignUp() {
    return (
        <div>
            <div className="crd card text-center mx-auto mt-3 mb-3">
                <div className="card-body">
                    <a href='/'><img className='InstaLogo img-fluid p-4' src='Images/InstaLogo.png' alt="instalogo"></img></a>
                    <div className='signuptxt px-4 mb-2 fw-bold'>Sign up to see photos and videos from your friends.
                        <button className='fbloginbtn btn btn-primary my-3'><span className='my-auto mx-1'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                        </svg></span><span> Log in with Facebook </span></button>
                        <div style={{ float: "left", width: "44%" }}><hr /></div>
                        <div style={{ float: "right", width: "44%" }}><hr /></div><span className='or'>OR</span>
                    </div>
                    <form className='px-4'>
                        <input className="form-control rounded-1 mb-2" type="text" placeholder="Mobile number or email" />
                        <input className="form-control rounded-1 mb-2" type="text" placeholder="Full Name" />
                        <input className="form-control rounded-1 mb-2" type="text" placeholder="Username" />
                        <input className="form-control rounded-1 mb-3" type="password" placeholder="Password" />
                        <div className='mb-2' style={{fontSize: "x-small"}}>People who use our service may have uploaded your contact information to Instagram.<a href='/'> Learn More</a></div>
                        <div className='mb-2' style={{fontSize: "x-small"}}>By signing up, you agree to our<a href='/'> Terms</a>,<a href='/'> Privacy Policy</a> and <a href='/'>Cookies Policy</a>. </div>
                        <button className='btn btn-primary loginbtn mb-2' type='submit'>Sign Up</button>
                    </form>
                </div>
            </div>
            <div className="crd card text-center mx-auto mt- mb-3">
                <div className="card-body">
                    <div>Have an account? <a className='loginlnk' href='/'><span className='logintxt'>Log in</span></a></div>
                </div>
            </div>
        </div>
    )
}
