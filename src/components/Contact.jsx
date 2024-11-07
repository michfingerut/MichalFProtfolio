import { ContactInfo, ContactContainer } from '../styles/styles';
import GoUpButton from './GoUpButton';
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
        Are you looking for a skilled software developer to bring your ideas to
        life? Whether you need help with web development, building a scalable
        application, or just want to discuss the latest in tech, I’m here to
        help! Feel free to reach out if you have any questions or are interested
        in collaborating on a project. You can click on the icons below to
        contact me directly through WhatsApp or other platforms.
      </p>
      <ContactInfo>
        <strong>Phone:</strong> 054-2398171
        <br />
        <strong>Email:</strong>{' '}
        <a href="mailto:michfingerut@gmail.com">michfingerut@gmail.com</a>
      </ContactInfo>
      <GoUpButton />
    </ContactContainer>
  );
}

export default ContactPage;
