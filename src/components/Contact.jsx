import { ContactInfo, ContactContainer } from '../styles/contactStyles';
import { DownloadButton } from '../styles/commonsStyles';

function ContactPage() {
  return (
    <ContactContainer id="contact-section">
      <h1>Get in Touch</h1>
      <p
        style={{
          textAlign: 'center',
          fontSize: '18px',
          lineHeight: '1.5',
          maxWidth: '800px',
        }}
      >
        Are you looking for a talented software developer to join your team?
        <br />
        I specialize in web development, building scalable applications, and
        staying up-to-date with the latest in technology.
        <br />
        I'm excited to contribute fresh ideas and deliver high-quality
        solutions.
        <br />
        You can contact me directly through the icons below via WhatsApp or
        other platforms.
      </p>
      <ContactInfo>
        <strong>Phone:</strong> 054-2398171
        <br />
        <strong>Email:</strong>{' '}
        <a href="mailto:michfingerut@gmail.com">michfingerut@gmail.com</a>
      </ContactInfo>

      <a href="./Michal_Fingerut.pdf" download="Michal_Fingerut_CV">
        <DownloadButton>Download My CV</DownloadButton>
      </a>
    </ContactContainer>
  );
}

export default ContactPage;
