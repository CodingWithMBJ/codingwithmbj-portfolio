import SectionHeading from "../../../shared/components/section-heading/SectionHeading";

import { aboutDetails, aboutParagraphs, aboutStats } from "../data/about.data";

import "../styles/About.css";

const About = () => {
  return (
    <section id="about" className="about-section" aria-labelledby="about-title">
      <div className="about-section__container">
        <SectionHeading
          eyebrow="About me"
          title="Building useful digital experiences"
          titleId="about-title"
          description="I work across frontend and backend development, with a focus on thoughtful interfaces, reliable APIs, and maintainable systems."
        />

        <div className="about-section__content">
          <div className="about-section__story">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <aside
            className="about-section__details"
            aria-label="Professional details"
          >
            <dl className="about-section__details-list">
              {aboutDetails.map((detail) => (
                <div key={detail.id} className="about-section__detail">
                  <dt>{detail.label}</dt>
                  <dd>{detail.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>

        <ul className="about-section__stats" aria-label="Development focus">
          {aboutStats.map((stat) => (
            <li key={stat.id} className="about-section__stat">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
