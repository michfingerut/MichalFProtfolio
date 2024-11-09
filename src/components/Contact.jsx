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
        <p>
          Are you looking for a talented software developer to join your team?
        </p>
        <p>
          I specialize in web development, building scalable applications, and
          staying up-to-date with the latest in technology.
        </p>
        <p>
          I'm excited to contribute fresh ideas and deliver high-quality
          solutions.
        </p>
        <p>
          You can contact me directly through the icons below via WhatsApp or
          other platforms.
        </p>
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
