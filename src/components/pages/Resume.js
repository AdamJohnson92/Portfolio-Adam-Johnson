import resume from './resume.pdf'

export default function Resume() {
  return (
    <div>
      <h3>Resume</h3>
      <a href={require("./resume.pdf" )}download={'Adam_G_Johnson_Resume.pdf'}> Click here to download the pdf</a>
    </div>
  );
}