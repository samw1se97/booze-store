import React from 'react';

import { FaLinkedin, FaGithubSquare, FaTwitterSquare } from 'react-icons/fa';
import { MdAccessTimeFilled, MdOutlineAlternateEmail } from 'react-icons/md';

export default function Footer() {
  const date1 = new Date().toLocaleDateString('en-IL', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
  });
  const date = new Date();
  const day = `${date.getDate() + 1}`.padStart(2, 0);
  const month = `${date.getMonth() + 1}`.padStart(2, 0);
  const year = date.getFullYear();

  let dateStr = `${month}/${day}/${year}`;

  console.log(date1);
  console.log(`${month}/${day}/${year}`);

  return (
    <footer>
      <div className='footer-content'>
        <div className='about-me'>
          <h5>About The Project</h5>
          <p className='footer-text p-about'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
        </div>
        <div className='my-links'>
          <h5>Keep Connected</h5>
          <div className='social-media icons'>
            <a
              target='_blank'
              href='linkedin.com/in/samuel-miodownick-59a16a223'>
              <FaLinkedin />
              <p className='footer-text'>LinkedIn</p>
            </a>
          </div>
          <div className='social-media icons'>
            <a
              target='_blank'
              href='https://github.com/samw1se97?tab=repositories'
              rel='noreferrer'>
              <FaGithubSquare />
              <p className='footer-text'>Github</p>
            </a>
          </div>

          <div className='social-media icons'>
            <a
              target='_blank'
              href='https://twitter.com/samwise_mio1997'
              rel='noreferrer'>
              <FaTwitterSquare />
              <p className='footer-text icons'>Twitter</p>
            </a>
          </div>
        </div>
        <div className='contact-me'>
          <h5>Contact me</h5>{' '}
          <div className='social-media'>
            <MdOutlineAlternateEmail />
            <p className='footer-text'>Miodownick@gmail.com</p>
          </div>
          <div className='social-media'>
            <MdAccessTimeFilled />
            <p className='date footer-text'> {dateStr} </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
