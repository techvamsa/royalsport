import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="about section-padding">
      <div className="container">
        <div className="inner-wrapper">
          <div className="left">
            {/* <img src="/imgs/about.webp" alt="About" /> */}
            <img src="/imgs/about-us.jpg" alt="About" />
          </div>
          <div className="right">
            <div className="heading-wrapper" data-eyebrow="About The Academy">
              <h2 className="title">
                About <span>RSF Fitness Academy  </span>
              </h2>
              <p>
                RSF Fitness Academy is just one fitness school to think about if
                you want to become a professional personal trainer, nutritionist
                , yoga instructor , advanced fitness professionals and personal
                trainer for special population. RSF has constantly contributed
                to the development and perfection of the fitness industry.
              </p>
              <p>
                Students from across the country can join the program and can
                learn from anywhere. The classes are hybrid including offline
                and online training.
              </p>

              <p>
                For many founders, launching a fitness academy stems from a
                powerful blend of personal passion and strategic opportunity:
                they aim to empower others to live healthier, more confident
                lives while leveraging a growing, resilient market. 
              </p>
              <p>
                The fitness industry is expanding steadily—driven by health-conscious lifestyles and technological innovation—and offers fitness professional the advantage of recurring revenue through fitness education, diverse income streams, and scalable growth potential
              </p>
            </div>

            <Link href="tel:+91-8126299638" className="btn">
              <img src="/imgs/call.svg" alt="Call" /> Call Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
