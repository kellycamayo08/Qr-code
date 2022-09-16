import React from 'react';
import '../card.css';
import qr from '../images/image-qr-code.png'


const Card = () => {
    return (
       <section className='card-main'>
            <img className='img-qr' src={qr} alt="qr-code" />
            <h1 className='title'>Improve your front-end skills by building projects</h1>
            <p className='text'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
       </section>
    );
};

export default Card;