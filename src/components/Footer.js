import React from 'react';
import linkedinImg from '../assets/img/linkedin.jpeg';
import facebookImg from '../assets/img/faceboook.png';
import telegramImg from '../assets/img/telegram.jpeg';
import githubImg from '../assets/img/github.png';
import gmailImg from '../assets/img/gmail.png';

const Footer = () => {
  const contacts = [
    { img: linkedinImg, link: 'https://www.linkedin.com/in/devsan-dhadavi-67b914274', alt: 'LinkedIn' },
    { img: facebookImg, link: 'https://www.facebook.com/devsan.dhadvi.3?mibextid=ZbWKwL', alt: 'Facebook' },
    { img: telegramImg, link: 'https://t.me/Devsan000', alt: 'Telegram' },
    { img: githubImg, link: 'https://github.com/devsan123', alt: 'GitHub' },
    { img: gmailImg, link: 'mailto:devsandhadvi11@gmail.com', alt: 'Gmail' }
  ];

  return (
    <section>
      <footer className="container text-left bg-light my-4" id="contact">
        <h1 className="my-3 py-3">Contact Me</h1>
        <div className="social d-flex mt-4">
          {contacts.map((contact, index) => (
            <a key={index} href={contact.link} target="_blank" rel="noopener noreferrer" className="m-auto rounded-circle">
              <img src={contact.img} alt={contact.alt} className='rounded-circle img-fluid'/>
            </a>
          ))}
        </div>
        <p className="text-center p-3">&copy; 2024, All rights reserved</p>
      </footer>
    </section>
  );
};

export default Footer;
