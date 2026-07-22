import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SectionHeading from "../../../shared/components/section-heading/SectionHeading";

import { contactLinks } from "../data/contact.data";

import "../styles/Contact.css";

const Contact = () => {
  return (
    <section
      id="contact"
      className="contact-section"
      aria-labelledby="contact-title"
    >
      <div className="contact-section__container">
        <SectionHeading
          eyebrow="Get in touch"
          title="Let’s build something useful"
          titleId="contact-title"
          description="I am interested in software engineering opportunities, collaborative projects, and conversations about building thoughtful digital products."
        />

        <div className="contact-section__content">
          <div className="contact-section__message">
            <p>
              Have a project, role, or idea you would like to discuss? Send me a
              message and I will get back to you.
            </p>

            <a
              className="contact-section__primary-action"
              href="mailto:codingwithmbj@gmail.com"
            >
              Start a conversation
            </a>
          </div>

          <ul className="contact-section__links">
            {contactLinks.map((link) => (
              <li key={link.id}>
                <a
                  className="contact-section__link"
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                >
                  <span className="contact-section__link-icon">
                    <FontAwesomeIcon icon={link.icon} />
                  </span>

                  <span className="contact-section__link-copy">
                    <small>{link.label}</small>
                    <strong>{link.value}</strong>
                  </span>

                  <span className="contact-section__arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <footer className="contact-section__footer">
          <p>© {new Date().getFullYear()} Mohamed Jalloh</p>

          <a href="#hero">Back to top</a>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
