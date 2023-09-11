import React from 'react';

export default function About() {
  return (
    <div className='body-content'>
      <h3>About Me</h3>
      <img src={require('../../assets/profile-picture.jpg')}   ></img>
      <p className='text-left'>
      Hello! My name is Adam Johnson. After graduating from Arizona State University, I worked for several years as a professional musician, before I decided it was time to explore other career options. <br></br>
      <br></br>
      I began my journey as a web developer in April of 2023, once again through Arizona State University. I instantly became hooked on the problem-solving that is so abundant in the field of web development, and I'm excited to continue on this journey and build my skills.
      </p>
    </div>
  );
}