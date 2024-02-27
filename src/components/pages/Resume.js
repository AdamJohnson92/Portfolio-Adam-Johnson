export default function Resume() {
  return (
    <div className='resume-full body-content text-green'>
      <h3>Resume</h3>
      <h4>
        <a className="body-link text-green" href={require("../../assets/resume.pdf")} download={'Adam_G_Johnson_Resume.pdf'}> Click here to download the pdf</a>
      </h4>

      <h2> Adam Johnson</h2>
      <p className='resume-contact-info'>Scottsdale, AZ 85257</p>
      <p className='resume-contact-info'>Cell: 480-421-8720</p>
      <p className='resume-contact-info'>Email: adamgjohnson92@gmail.com</p>
      <div className='resume-body'>

        <h3 className='resume-section-header resume-border-top'>Summary</h3>
        <p>A certified Full Stack Web Developer, with a background in Psychology and music performance/education. Drawn to the problem solving that is abundant in technology careers, and enjoys working on teams where communication and collaboration is key.</p>

        <h3 className='resume-section-header resume-border-top'>Technical Skills</h3>
        <p><b>Technical Languages</b></p>
        <ul className='resume-list'>
          <li>Javascript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>SQL</li>
          <li>JSON</li>
        </ul>
        <p><b>Frameworks/Libraries</b></p>
        <ul className='resume-list'>
          <li>MERN Stack</li>
          <li>React.js</li>
          <li>Express.js</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>Bootstrap</li>
          <li>jQuery</li>
          <li>Handlebars View framework</li>
          <li>PWA tools such as Webpack</li>
          <li>Version control through Git</li>
        </ul>

        <h3 className='resume-section-header resume-border-top'>Professional Experience</h3>
        <h4 className='resume-job text-green'>Client Success Manager (Soundblock LLC)</h4>
        <p>August 2021-January 2023</p>
        <p>
          Responded to user support tickets quickly and efficiently. Worked closely with the web development team to identify bugs and opportunities to improve the platform. Communicated directions for future development to management. Educated users with a wide range of technological experience about using the platform effectively.
          Launched platform for live open beta testing with users.
          Received consistent positive feedback from users regarding quality support.
          Worked to prevent users from misusing the platform to upload intellectual property they did not own.

        </p>
        <h4 className='resume-job text-green'>Customer Care Representative (CVS Health)</h4>
        <p>September 2020-August 2021</p>
        <p>
          Educated patients about their prescription drug benefits. Communication was clear and concise so as to ensure that the patient felt equipped with a better understanding of their benefits. Engaged with a work environment that required adaptability in using new software and being prepared for standard operating procedures to update and change.
        </p>
        <h4 className='resume-job text-green'>Percussion Instructor (Coronado High School)</h4>
        <p>July 2010-May 2021</p>
        <p>
          Worked closely with a team of fellow educators to address areas of improvement for students in the music program. Coordinated efforts to engage with students on their level to expand their abilities as musicians, performers, and members of a team.
        </p>
        <h4 className='resume-job text-green'>Independent Musician</h4>
        <p>May 2010-Present</p>
        <p>
          Perform as a professional drummer in a variety of contexts and musical genres. Responsibilities include preparing before a performance to ensure that I am well versed in the music that will be performed, and show up to performances and rehearsals, on time, fully prepared, with all materials needed for the show.
        </p>
        <h3 className='resume-section-header resume-border-top'>Education</h3>
        <p><b>Full Stack Web Development Certificate: </b>Arizona State University, Tempe, AZ <br></br>April 2023-October 2023</p>
        <p></p>

        <p><b>Bachelor of Science in Psychology: </b>Arizona State University, Tempe, AZ <br></br>August 2010-May 2014
        </p>
        <p></p>
      </div>
    </div>
  );
}