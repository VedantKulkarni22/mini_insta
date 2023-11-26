import React from 'react'
import '../Styles/UploadVideo.css'
import VideoUploader from './VideoUploader'
import { Link } from 'react-router-dom'


export default function UploadVideo() {
    return (
        <>
            {/* Navbar */}
            <ul className="nav nav-tabs justify-content-center mt-5">
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/uploadimg">Image</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to="/uploadvid">Video</Link>
                </li>
            </ul>
            {/* Upload Video Section */}
            <form action="/home" className='p-5'>
                <VideoUploader />
                <div className="d-flex flex-column justify-content-center my-4 mx-auto w-25">
                    <input type="text" className="form-control my-4" placeholder="Add Caption..." />
                    <button type="submit" className='btn btn-outline-dark my-4'>Post</button>
                </div>
            </form>
        </>
    )
}
