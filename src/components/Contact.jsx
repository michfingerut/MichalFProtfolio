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
          Are you looking for a talented software developer to join your team? I
          specialize in web development, building scalable applications, and
          staying up-to-date with the latest in technology.
        </p>
        <p>
          I am eager to contribute to your projects and bring fresh ideas to the
          table. If you're looking for someone passionate and dedicated to
          delivering high-quality solutions, feel free to reach out.
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
