import resume from './resume.pdf'

export default function Resume() {
  return (
    <div className='resume-full'>
      <h3>Resume</h3>
      <a href={require("./resume.pdf")} download={'Adam_G_Johnson_Resume.pdf'}> Click here to download the pdf</a>
      <h2> Adam Johnson</h2>
      <p className='resume-contact-info'>7102 E. Oak St. Apt 12 Scottsdale, AZ 85257</p>
      <p className='resume-contact-info'>Cell: 480-421-8720</p>
      <p className='resume-contact-info'>Email: adamgjohnson92@gmail.com</p>
      <div className='resume-body'>
        <h2 className='resume-section-header resume-border-top'>Education</h2>
        <p>Barrett, The Honors College at Arizona State University (Class of 2014) Bachelor of Science in Psychology</p>
        <ul className='resume-list'>
          <li>Graduated Summa Cum Laude</li>
          <li>Recipience of the Moeur Award for Academic Achievement</li>
        </ul>
        <p>EdX Fullstack Flex Web Development Bootcamp through Arizona State University</p>
        <h2 className='resume-section-header resume-border-top'>Professional Experience</h2>
        <h4 className='resume-job'>Client Success Manager (Soundblock LLC)</h4>
        <p>August 2021-January 2023</p>
        <ul className='resume-list'>
          <li>Respond to user support tickets from clients efficiently</li>
          <li>Educate clients (music artists, labels, and managers) on using the Soundblock platform for music
            distribution and collaborative storage
          </li>
          <li>Facilitate distribution of client music to popular streaming platforms (Spotify, Apple Music,
            Pandora, etc.)</li>
          <li>Assist clients in collecting royalties earned on streaming platforms</li>
          <li>Engage in problem solving with members of IT department while Soundblock is in its beta stage
            of development
          </li>
          <li>Communicate suggested direction of development to the company CEO</li>
        </ul>
        <h4 className='resume-job'>Customer Care Representative (CVS Health)</h4>
        <p>September 2020-August 2021</p>
        <ul className='resume-list'>
          <li>Answer customer service calls regarding customers’ prescription benefits and Medicare Part D
            plans</li>
          <li>Able to effectively communicate information about their prescriptions while also resolving issues
            and maintaining a positive presence on the phone</li>
          <li>Large scope of issues ranging from ordering prescriptions refills, contacting prescriber offices,
            managing payment options for prescriptions and monthly premiums, informing callers about the
            details of their prescription drug coverage, and working with callers to find resolutions to their
            inquiries on first contact
          </li>
        </ul>
        <h4 className='resume-job'>Percussion Instructor (Coronado High School)</h4>
        <p>July 2010-May 2021</p>
        <ul className='resume-list'>
          <li>Instruct high school students in marching percussion</li>
          <li>Arrange percussion show music/exercise packets
          </li>
          <li>Focus the approach on personal growth through hard work and personal accountability</li>
          <li>Managed team of Percussion Educators to work independently towards a singular goal</li>
          <li>Communicate with Band Director on progress and areas in need of improvement</li>
        </ul>
      </div>
    </div>
  );
}