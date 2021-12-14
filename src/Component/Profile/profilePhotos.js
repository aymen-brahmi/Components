import React from 'react'
import './profilePhotos.css';
import aymen from '../../photoAymen.jpg';

function profilePhotos() {
    return (
        <div>
            <img className="Photo" src={aymen} alt='image in the src folder'/>
        </div>
    );
};

export default profilePhotos;
