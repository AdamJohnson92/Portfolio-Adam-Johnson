import React from 'react';

export default function About() {
  return (
    <div className='body-content'>
      <h3>About Me</h3>
      <img src={require('../../assets/Adam_Johnson_Headshot.jpg')} alt='Adam Johnson, smiling at the camera.'  ></img>
      <p className='text-left'>
      Hello! My name is Adam Johnson. After graduating from Arizona State University with my Bachelor's degree in Psychology, I worked for several years as a professional musician, playing the drums all over the United States before I decided it was time to explore other career options. <br></br>
      <br></br>
      I began my journey as a web developer in April of 2023, once again through Arizona State University. I instantly became fascinated by the problem-solving that is so abundant in the field of web development. Gaining new skills was thrilling, and I became hooked on the feeling of solving a difficult coding problem. My enthusiam for web development continued throughout the course, and in October of 2023, I completed the FullStack Flex Bootcamp through ASU and EdX. I'm excited to continue to build my skills, learn knew things, and expand my horizons in an ever changing field. 
      </p>
    </div>
  );
}