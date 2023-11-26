import React from 'react'
import '../Styles/Home.css'
import Post from './Post'
import SwitchAccountSection from './SwitchAccountSection'
import SuggestionSection from './SuggestionSection'
import { Link } from 'react-router-dom'


export default function Home() {
    return (
        <>
            {/* Sidebar */}
            <div className='row g-0'>
                <div className="sidebar col-4 col-md-2 d-flex flex-column justify-content-evenly">
                    <Link to='/home'><img className='InstaLogo img-fluid p-3 mt-2 ms-3' src='Images/InstaLogo.png' alt="instalogo" height="85px" width="150px"></img></Link>
                    <div className='p-2 rounded-3'>
                        <div className='opt rounded-3 p-2'>
                            <Link className='' to='/home'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-house-door mx-3" viewBox="0 0 16 16">
                                    <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z" />
                                </svg><span>Home</span>
                            </Link>
                        </div>
                        <div className='opt p-2 rounded-3 my-3'>
                            <Link className='' to='/comingsoon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-search mx-3" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg><span>Search</span>
                            </Link>
                        </div>
                        <div className='opt p-2 rounded-3 my-3'>
                            <Link className='' to='/comingsoon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-compass mx-3" viewBox="0 0 16 16">
                                    <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                                    <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z" />
                                </svg><span>Explore</span>
                            </Link>
                        </div>
                        <div className='opt p-2 rounded-3 my-3'>
                            <Link className='' to='/comingsoon'>
                                <img className='mx-3' src='Images/reelIcon.svg' alt="reel logo" width="30" height="30"></img>
                                <span>Reels</span>
                            </Link>
                        </div>
                        <div className='opt p-2 rounded-3 my-3'>
                            <Link className='' to='/comingsoon'>
                                <svg className='mx-3' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" viewBox="0 0 32 32" id="messenger"><path fill="none" stroke="#212121" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.268,2.112A13,13,0,0,0,6,23.3v3.661A1.258,1.258,0,0,0,7.82,28.09l2.663-1.332a12.9,12.9,0,0,0,7.25,1.126A13,13,0,1,0,14.268,2.112Z"></path><path d="M9.049,18.163,13.64,11.63a.64.64,0,0,1,.94-.2l3.075,2.307a.641.641,0,0,0,.714.036l3.745-2.646a.64.64,0,0,1,.9.835l-3.707,6.414a.64.64,0,0,1-.9.263L14.3,16.181a.638.638,0,0,0-.615-.024l-3.794,2.9A.641.641,0,0,1,9.049,18.163Z"></path></svg><span>Messages</span>
                            </Link>
                        </div>
                        <div className='opt p-2 rounded-3 my-3'>
                            <Link className='' to='/comingsoon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-heart mx-3" viewBox="0 0 16 16">
                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                </svg><span>Notification</span>
                            </Link>
                        </div>
                        <div className='opt p-2 rounded-3 my-3'>
                            <Link className='' to='/uploadimg'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-plus-square mx-3" viewBox="0 0 16 16">
                                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg><span>Create</span>
                            </Link>
                        </div>
                        <div className='opt p-2 rounded-3 my-3'>
                            <Link className='' to='/comingsoon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-circle mx-3" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                </svg><span>Profile</span>
                            </Link>
                        </div>
                    </div>
                    {/* <div className='p-2'>
                        <div className='opt rounded-3 dropup my-3'>
                            <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img className='mx-1' src='Images/three-horizontal-lines-icon.svg' alt='three-horizontal-lines-icon' width="30" height="30"></img>
                                <span className='mx-2'>More</span>
                            </button>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/">Action</Link></li>
                                <li><Link className="dropdown-item" to="/">Action two</Link></li>
                                <li><Link className="dropdown-item" to="/">Action three</Link></li>
                            </ul>
                        </div>
                    </div> */}
                </div>
                {/* Home Section */}
                <div className="col-4 col-md-2"></div>
                <div className='col-4 col-md-7'>
                    <Post />
                    <Post />
                    <Post />
                </div>
                <div className='col-4 col-md-3'>
                    <div className='d-flex flex-row justify-content-between my-5 mx-3'>
                        <SwitchAccountSection />
                    </div>
                    <div className='d-flex flex-row justify-content-between mx-3'>
                        <p>Suggested for you</p>
                        <Link to='/comingsoon'>
                            <p>See all</p>
                        </Link>
                    </div>
                    <SuggestionSection />
                    <SuggestionSection />
                    <SuggestionSection />
                    <SuggestionSection />
                    <SuggestionSection />
                    <SuggestionSection />
                </div>
            </div>
        </>
    )
}
