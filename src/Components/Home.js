import React from 'react'
import '../Styles/Home.css'

export default function Home() {
    return (
        <>
            {/* Sidebar */}
            <div className='row g-0'>
                <div className="sidebar col-4 col-md-2 d-flex flex-column justify-content-evenly">
                    <a href='/'><img className='InstaLogo img-fluid p-3 mt-2' src='Images/InstaLogo.png' alt="instalogo" height="85px" width="150px"></img></a>
                    <div className='p-2 rounded-3'>
                        <div className='opt rounded-3 p-2'>
                            <a className='' href='/'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-house-door mx-3" viewBox="0 0 16 16">
                                    <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z" />
                                </svg><span>Home</span>
                            </a>
                        </div>
                        <div className='opt p-2 rounded-3 my-3'>
                            <a className='' href='/'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-search mx-3" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg><span>Search</span>
                            </a>
                        </div>
                        <div className='opt p-2 rounded-3 my-3'>
                            <a className='' href='/'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-compass mx-3" viewBox="0 0 16 16">
                                    <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                                    <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z" />
                                </svg><span>Explore</span>
                            </a>
                        </div>
                        <div className='opt p-2 rounded-3 my-3'>
                            <a className='' href='/'>
                                <img className='mx-3' src='Images/reelIcon.svg' alt="reel logo" width="30" height="30"></img>
                                <span>Reels</span>
                            </a>
                        </div>
                        <div className='opt p-2 rounded-3 my-3'>
                            <a className='' href='/'>
                                <svg className='mx-3' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" viewBox="0 0 32 32" id="messenger"><path fill="none" stroke="#212121" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.268,2.112A13,13,0,0,0,6,23.3v3.661A1.258,1.258,0,0,0,7.82,28.09l2.663-1.332a12.9,12.9,0,0,0,7.25,1.126A13,13,0,1,0,14.268,2.112Z"></path><path d="M9.049,18.163,13.64,11.63a.64.64,0,0,1,.94-.2l3.075,2.307a.641.641,0,0,0,.714.036l3.745-2.646a.64.64,0,0,1,.9.835l-3.707,6.414a.64.64,0,0,1-.9.263L14.3,16.181a.638.638,0,0,0-.615-.024l-3.794,2.9A.641.641,0,0,1,9.049,18.163Z"></path></svg><span>Messages</span>
                            </a>
                        </div>
                        <div className='opt p-2 rounded-3 my-3'>
                            <a className='' href='/'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-heart mx-3" viewBox="0 0 16 16">
                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                </svg><span>Notification</span>
                            </a>
                        </div>
                        <div className='opt p-2 rounded-3 my-3'>
                            <a className='' href='/'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-plus-square mx-3" viewBox="0 0 16 16">
                                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg><span>Create</span>
                            </a>
                        </div>
                        <div className='opt p-2 rounded-3 my-3'>
                            <a className='' href='/'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-circle mx-3" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                </svg><span>Profile</span>
                            </a>
                        </div>
                    </div>
                    <div className='p-2'>
                        <div className='opt rounded-3 dropup my-3'>
                            <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img className='mx-1' src='Images/three-horizontal-lines-icon.svg' alt='three-horizontal-lines-icon' width="30" height="30"></img>
                                <span className='mx-2'>More</span>
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/">Action</a></li>
                                <li><a className="dropdown-item" href="/">Action two</a></li>
                                <li><a className="dropdown-item" href="/">Action three</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Home Section */}
                <div className="col-4 col-md-2"></div>
                <div className='col-4 col-md-7'>
                    <div className='my-5 text-center'>
                        <a href='/'>
                            <img className='mx-3' src='Images/circleicon.svg' alt='circle icon' width="56" height="56"></img>
                        </a>
                        <a href='/'>
                            <img className='mx-3' src='Images/circleicon.svg' alt='circle icon' width="56" height="56"></img>
                        </a>
                        <a href='/'>
                            <img className='mx-3' src='Images/circleicon.svg' alt='circle icon' width="56" height="56"></img>
                        </a>
                        <a href='/'>
                            <img className='mx-3' src='Images/circleicon.svg' alt='circle icon' width="56" height="56"></img>
                        </a>
                        <a href='/'>
                            <img className='mx-3' src='Images/circleicon.svg' alt='circle icon' width="56" height="56"></img>
                        </a>
                        <a href='/'>
                            <img className='mx-3' src='Images/circleicon.svg' alt='circle icon' width="56" height="56"></img>
                        </a>
                        <a href='/'>
                            <img className='mx-3' src='Images/circleicon.svg' alt='circle icon' width="56" height="56"></img>
                        </a>
                        <a href='/'>
                            <img className='mx-3' src='Images/circleicon.svg' alt='circle icon' width="56" height="56"></img>
                        </a>
                    </div>
                    <div className='w-50 mx-auto my-5'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div>
                                <a href='/' className=''>
                                    <img src='Images/circleicon.svg' alt="circleicon" width="32" height="32"></img>
                                    <span className='mx-3 fw-bold'>rvcj</span><span style={{ color: "rgb(115, 115, 115)" }}>.2hr</span>
                                </a>
                            </div>
                            <div>
                                <a href='/' className=''>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" class="bi bi-three-dots" viewBox="0 0 16 16">
                                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className='my-3'>
                            <img src="Images/postsample.png" alt='post' className="img-fluid rounded-1"></img>
                        </div>
                        <div className='d-flex justify-content-between align-items-center mb-1'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-heart mx-1 pb-1" viewBox="0 0 16 16">
                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="black" class="bi bi-chat mx-1 pb-1" viewBox="0 0 16 16">
                                    <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="currentColor" class="bi bi-send mx-1 pb-1" viewBox="0 0 16 16">
                                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                                </svg>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="currentColor" class="bi bi-bookmark pb-1" viewBox="0 0 16 16">
                                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <small className='mx-2'>22364 likes</small>
                        </div>
                        <div>
                            <span className='mx-2 fw-bold'>rvcj</span><span>Caption...</span><br />
                            <small className='mx-2' style={{ color: "rgb(115, 115, 115)" }}>more</small>
                            <div className='mx-2 my-1' style={{ color: "rgb(115, 115, 115)" }}>View all 9999 comments</div>
                            <input className='w-100 ip mx-2' type="text" placeholder='Add a comment...'></input>
                            <hr />
                        </div>
                    </div>
                </div>
                <div className='col-4 col-md-3'>
                    <div className='d-flex flex-row justify-content-between my-5 mx-3'>
                        <a href='/'>
                            <img src='Images/circleicon.svg' alt="circleicon" width="44" height="44"></img>
                        </a>
                        <a href='/'>
                            <div className='d-flex flex-column'>
                                <span className='fw-bold'>_.vedantt._22</span>
                                <small>Vedant Kulkarni</small>
                            </div>
                        </a>
                        <div>
                            <a href='/' className='' style={{ color: "rgb(0, 149, 246)" }}>Switch</a>
                        </div>
                    </div>
                    <div className='d-flex flex-row justify-content-between mx-3'>
                        <p>Suggested for you</p>
                        <a href='/'>
                        <p>See all</p>
                        </a>
                    </div>
                    <div className='d-flex flex-row justify-content-between my-3 mx-3'>
                        <a href='/'>
                            <img src='Images/circleicon.svg' alt="circleicon" width="44" height="44"></img>
                        </a>
                        <a href='/'>
                            <div className='d-flex flex-column'>
                                <span className='fw-bold'>_.vedantt._22</span>
                                <small>Vedant Kulkarni</small>
                            </div>
                        </a>
                        <div>
                            <a href='/' className='' style={{ color: "rgb(0, 149, 246)" }}>Follow</a>
                        </div>
                    </div>
                    <div className='d-flex flex-row justify-content-between my-3 mx-3'>
                        <a href='/'>
                            <img src='Images/circleicon.svg' alt="circleicon" width="44" height="44"></img>
                        </a>
                        <a href='/'>
                            <div className='d-flex flex-column'>
                                <span className='fw-bold'>_.vedantt._22</span>
                                <small>Vedant Kulkarni</small>
                            </div>
                        </a>
                        <div>
                            <a href='/' className='' style={{ color: "rgb(0, 149, 246)" }}>Follow</a>
                        </div>
                    </div>
                    <div className='d-flex flex-row justify-content-between my-3 mx-3'>
                        <a href='/'>
                            <img src='Images/circleicon.svg' alt="circleicon" width="44" height="44"></img>
                        </a>
                        <a href='/'>
                            <div className='d-flex flex-column'>
                                <span className='fw-bold'>_.vedantt._22</span>
                                <small>Vedant Kulkarni</small>
                            </div>
                        </a>
                        <div>
                            <a href='/' className='' style={{ color: "rgb(0, 149, 246)" }}>Follow</a>
                        </div>
                    </div>
                    <div className='d-flex flex-row justify-content-between my-3 mx-3'>
                        <a href='/'>
                            <img src='Images/circleicon.svg' alt="circleicon" width="44" height="44"></img>
                        </a>
                        <a href='/'>
                            <div className='d-flex flex-column'>
                                <span className='fw-bold'>_.vedantt._22</span>
                                <small>Vedant Kulkarni</small>
                            </div>
                        </a>
                        <div>
                            <a href='/' className='' style={{ color: "rgb(0, 149, 246)" }}>Follow</a>
                        </div>
                    </div>
                    <div className='d-flex flex-row justify-content-between my-3 mx-3'>
                        <a href='/'>
                            <img src='Images/circleicon.svg' alt="circleicon" width="44" height="44"></img>
                        </a>
                        <a href='/'>
                            <div className='d-flex flex-column'>
                                <span className='fw-bold'>_.vedantt._22</span>
                                <small>Vedant Kulkarni</small>
                            </div>
                        </a>
                        <div>
                            <a href='/' className='' style={{ color: "rgb(0, 149, 246)" }}>Follow</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
