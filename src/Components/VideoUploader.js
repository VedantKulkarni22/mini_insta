import React, { useState } from 'react';

const VideoUploader = () => {
    const [videoSrc, setVideoSrc] = useState('');
    const [videoName, setVideoName] = useState('');

    const readURL = (input) => {
        if (input.files && input.files[0]) {
            const reader = new FileReader();

            reader.onload = (e) => {
                setVideoSrc(e.target.result);
                setVideoName(input.files[0].name);
            };

            reader.readAsDataURL(input.files[0]);
        }
    };

    const removeUpload = () => {
        setVideoSrc('');
        setVideoName('');
    };

    const handleFileChange = (e) => {
        readURL(e.target);
    };

    return (
        <div className="file-upload d-flex flex-column">
            <div className="image-upload-wrap mx-auto my-4">
                <input className="file-upload-input form-control" type="file" onChange={handleFileChange} accept="video/*" />
            </div>
            {videoSrc && (
                <>
                    <div className="file-upload-content mx-auto my-4">
                        <video className="file-upload-video" height="496px" width="436px" controls>
                            <source src={videoSrc} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="video-title-wrap mx-auto my-4">
                        <button type="button" onClick={removeUpload} className="remove-video btn btn-outline-dark">Remove <span className="video-title">{videoName}</span></button>
                    </div>
                </>
            )}

        </div>
    );
};

export default VideoUploader;
