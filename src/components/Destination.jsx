import React from 'react';
import pin from '../assets/images/pin.png';

export default function Destination({
    title,
    location,
    googleMapsUrl,
    startDate,
    endDate,
    description,
    imageUrl,
}) {
    return (
        <section className='card'>
            <div className='card-img'>
                <img src={imageUrl} />
            </div>
            <div className='card-info'>
                <div className='card-details'>
                    <img src={pin} />
                    <h4>{location}</h4>
                    <a href={googleMapsUrl} target='_blank'>
                        View on Google Maps
                    </a>
                </div>
                <h2>{title}</h2>
                <h3>
                    {startDate} - {endDate}
                </h3>
                <p>{description}</p>
            </div>
        </section>
    );
}
