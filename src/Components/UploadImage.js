import React from 'react'
import '../Styles/UploadImage.css'
import ImageUploader from './ImageUploader'
import { Link } from 'react-router-dom'


export default function UploadImage() {
    return (
        <>
            {/* Navbar */}
            <ul className="nav nav-tabs justify-content-center mt-5">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/uploadimg">Image</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/uploadvid">Video</Link>
                </li>
            </ul>
            {/* Upload Image Section */}
            <form action='/home' className='p-5'>
                <ImageUploader />
                <div className="d-flex flex-column justify-content-center my-4 mx-auto w-25">
                    <input type="text" className="form-control my-4" placeholder="Add Caption..." />
                    <button type='submit' className='btn btn-outline-dark my-4'>Post</button>
                </div>
            </form>

        </>
    )
}
