import React from 'react';
import '../card.css';
import qr from '../images/image-qr-code.png'


const Card = () => {
    return (
       <article className='card-main'>
            <section className='img-container'>
                <img className='img-qr' src={qr} alt="qr-code" />
            </section>
            <h1 className='title'>Improve your front-end skills by building projects</h1>
            <p className='text'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
       </article>
    );
};

export default Card;