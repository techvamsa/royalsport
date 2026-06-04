import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  CalendarDays,
  CheckCircle2,
  Dumbbell,
  GraduationCap,
  MapPin,
  Medal,
  Phone,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import AcademyVideoModal from "@/app/components/AcademyVideoModal";
import AcademyVideoButton from "@/app/components/AcademyVideoButton";
import Clients from "@/app/components/Clients";
import { academyCourseCards } from "@/app/libs/courses";
import "@/app/styles/fitness-academy.scss";

export const metadata = {
  title: "Fitness Academy | Royal Sports N Fitness",
  description:
    "Explore RSF Fitness Academy courses for certified personal training, diet and nutrition, hybrid learning, practical sessions, and placement assistance.",
};

const founderImage =
  "https://royalsportsnfitness.com/static/media/founder.7d3517941e127bcb5343.webp";
const rsfteam = "https://enquiry.royalsportsnfitness.com/imgs/about-us.jpg";
const anoopImage =
  "https://royalsportsnfitness.com/static/media/anoop.5a933668019ac50790b6.jpg";
const anoopVideo = "https://enquiry.royalsportsnfitness.com/imgs/video.mp4";

const academyStats = [
  { value: "100%", label: "Placement Assistance" },
  { value: "Hybrid", label: "Online + Offline Classes" },
  { value: "Practical", label: "Operational Gym Training" },
];

const founderParagraphs = [
  "There is just one fitness school to think about if you want to become a professional personal trainer or nutritionist: RSF Fitness Academy. RSF has constantly contributed to the development and perfection of the fitness industry.",
  "Students from across the country can join the program and learn from anywhere. Classes are hybrid, including both offline and online training.",
  "The practical sessions for the Diploma in Personal Training courses are held in a fully equipped and operational gym.",
  "With the assistance of Thakur Anoop Singh and many other celebrity gym trainers and educators, students can complete the course and obtain certification in physical training and nutrition with 100% placement assistance.",
];

const founderHighlights = [
  "Hybrid learning for students across India",
  "Practical sessions inside an operational gym",
  "Celebrity trainer workshops and career support",
];

const anoopMedals = [
  "Gold Medal in a bodybuilding contest in Bangkok, Thailand",
  "Bronze Medal at 49th Asian Championship, Uzbekistan",
  "Silver Medal at Fit Factor - Mr India",
];

const academyFeatures = [
  {
    title: "Industry-Led Curriculum",
    text: "Modules are designed around real client needs, gym-floor coaching, and professional trainer standards.",
    icon: BookOpenCheck,
  },
  {
    title: "Operational Gym Exposure",
    text: "Students practice in a fully equipped environment instead of learning only from theory.",
    icon: Dumbbell,
  },
  {
    title: "Career Support",
    text: "Placement assistance, certification guidance, and interview readiness help students enter the industry.",
    icon: ShieldCheck,
  },
  {
    title: "Celebrity Workshops",
    text: "Special sessions with industry educators and celebrity trainers add practical perspective throughout the course.",
    icon: Sparkles,
  },
];

const faculty = [
  {
    name: "Mr. Neeraj Shriwal",
    role: "Senior CPT Faculty",
    exp: "15+ years experience",
    image: "/imgs/course/Mr. Neeraj Shriwal.jpg",
  },
  {
    name: "Mr. Vrushal Somwanshi",
    role: "Senior CPT Faculty",
    exp: "12+ years experience",
    image: "/imgs/course/Mr. Vrushal Somwanshi.jpg",
  },
  {
    name: "Ms. Malavika Kulkarni",
    role: "Senior CNS Faculty",
    exp: "10+ years experience",
    image: "/imgs/course/Ms. Malavika Kulkarni.jpg",
  },
];

const contactItems = [
  {
    label: "Call Academy",
    value: "+91 7455900306",
    href: "tel:+917455900306",
    icon: Phone,
  },
  {
    label: "Visit Center",
    value: "Meerut, Pune, Jaipur, Lucknow",
    href: "/contact-us",
    icon: MapPin,
  },
  {
    label: "Brochure",
    value: "Download academy details",
    href: "https://royalsportsnfitness.com/images/rsf_fitness_academy_brochure.pdf",
    icon: CalendarDays,
  },
];

const ourChampions = {
  title: "Success Stories from Our Champions",
  subtitle:
    "Hear directly from athletes, fitness enthusiasts, and transformation achievers who have elevated their performance with Royal Sports & Fitness.",
  items: [
    {
      id: 1,
      title: "Academy Journey",
      videoUrl: "https://enquiry.royalsportsnfitness.com/imgs/team-1.mp4",
    },
    {
      id: 2,
      title: "Training Experience",
      videoUrl: "https://enquiry.royalsportsnfitness.com/imgs/team-2.mp4",
    },
    {
      id: 3,
      title: "Student Feedback",
      videoUrl: "https://enquiry.royalsportsnfitness.com/imgs/team-3.mp4",
    },
    {
      id: 4,
      title: "Transformation Story",
      videoUrl: "https://enquiry.royalsportsnfitness.com/imgs/team-4.mp4",
    },
    {
      id: 5,
      title: "Fitness Progress",
      videoUrl:
        "https://enquiry.royalsportsnfitness.com/imgs/video/feedback.mp4",
    },
    {
      id: 6,
      title: "Coaching Experience",
      videoUrl:
        "https://enquiry.royalsportsnfitness.com/imgs/video/feedback1.mp4",
    },
    {
      id: 7,
      title: "Confidence Builder",
      videoUrl:
        "https://enquiry.royalsportsnfitness.com/imgs/video/feedback2.mp4",
    },
    {
      id: 8,
      title: "Practical Learning",
      videoUrl:
        "https://enquiry.royalsportsnfitness.com/imgs/video/feedback3.mp4",
    },
    {
      id: 9,
      title: "Career Motivation",
      videoUrl:
        "https://enquiry.royalsportsnfitness.com/imgs/video/feedback4.mp4",
    },
    {
      id: 10,
      title: "RSF Feedback",
      videoUrl:
        "https://enquiry.royalsportsnfitness.com/imgs/video/feedback5.mp4",
    },
  ],
};

export default function FitnessAcademyPage() {
  return (
    <main className="academy-page">
      <section className="academy-hero">
        <div className="container academy-hero__grid">
          <div className="academy-hero__copy">
            <span className="academy-eyebrow">
              <GraduationCap size={17} />
              Fitness Academy
            </span>
            <h1>
              Become a certified fitness professional with RSF Fitness Academy.
            </h1>
            <p>
              Learn personal training and nutrition through hybrid classes,
              practical gym sessions, expert mentoring, and placement-focused
              certification support.
            </p>

            <div className="academy-hero__actions">
              <Link
                href="#courses"
                className="academy-btn academy-btn--primary"
              >
                Explore Courses <ArrowRight size={18} />
              </Link>
              <Link
                href="tel:+917455900306"
                className="academy-btn academy-btn--light"
              >
                <Phone size={18} />
                Call Academy
              </Link>
          
            </div>
          </div>

          <div className="academy-hero__visual">
            <img src={rsfteam} alt="RSF Fitness Academy founder Puneet Jain" />
            <div className="academy-hero__badge">
              <Medal size={20} />
              <span>
                Hybrid programs with practical training and placement support
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="academy-stats" aria-label="Academy highlights">
        <div className="container academy-stats__grid">
          {academyStats.map((stat) => (
            <div className="academy-stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="academy-section academy-story academy-story--founder">
        <div className="container academy-story__grid">
          <div className="academy-story__media">
            <img src={founderImage} alt="Founder and CEO Puneet Jain" />
          </div>

          <div className="academy-story__content">
            <div className="academy-section__head">
              <span>Founder Story</span>
              <h2>Founder&apos;s View</h2>
            </div>

            {founderParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className="academy-story__checks">
              {founderHighlights.map((item) => (
                <span key={item}>
                  <CheckCircle2 size={18} />
                  {item}
                </span>
              ))}
            </div>

            <div className="academy-story__signature">
              <strong>Puneet Jain</strong>
              <span>Founder and CEO</span>
            </div>
          </div>
        </div>
      </section>

      <section className="academy-section academy-story academy-story--mentor">
        <div className="container academy-story__grid academy-story__grid--reverse">
          <div className="academy-story__content">
            <div className="academy-section__head">
              <span>Celebrity Mentor</span>
              <h2>
                Classes with renowned Film and TV Actor Thakur Anoop Singh
              </h2>
            </div>

            <p>
              Thakur Anoop Singh is an Indian actor who primarily appears in
              Telugu films. He played Dhritarashtra in the 2013 TV series
              Mahabharat.
            </p>
            <p>
              In 2015, he won multiple medals at championships around the world
              and became a respected name in professional bodybuilding.
            </p>

            <div className="academy-story__medals">
              {anoopMedals.map((medal) => (
                <span key={medal}>
                  <BadgeCheck size={18} />
                  {medal}
                </span>
              ))}
            </div>

            <p>
              Thakur Anoop Singh is a Brand Ambassador of RSF and he will be
              training top students in every class of the course. Multiple
              workshops are also organized throughout the course term by famous
              celebrity trainers from the industry.
            </p>
          </div>

          <AcademyVideoModal
            imageSrc={anoopImage}
            imageAlt="Thakur Anoop Singh"
            videoSrc={anoopVideo}
            label="Play Thakur Anoop Singh academy video"
          />
        </div>
      </section>

      <section className="academy-section academy-courses" id="courses">
        <div className="container">
          <div className="academy-section__head academy-section__head--center">
            <span>Academy Courses</span>
            <h2>Our Courses</h2>
          </div>

          <div className="academy-courses__grid">
            {academyCourseCards.map((course, index) => (
              <article
                className={`academy-course-card ${
                  index % 2 === 1 ? "academy-course-card--reverse" : ""
                }`}
                key={course.title}
              >
                <div className="academy-course-card__media">
                  <img src={course.image} alt={course.title} />
                  <span>{course.tag}</span>
                </div>
                <div className="academy-course-card__body">
                  <h3>{course.title}</h3>
                  <p>{course.summary}</p>
                  <ul>
                    {course.points.map((point) => (
                      <li key={point}>
                        <BadgeCheck size={17} />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <Link href={course.href}>
                    View Course <ArrowRight size={17} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="academy-section academy-features">
        <div className="container academy-features__grid">
          <div className="academy-features__intro">
            <div className="academy-section__head">
              <span>Academy Advantage</span>
              <h2>Training built for the gym floor, not just the classroom.</h2>
            </div>
            <p>
              Students move from concepts to coached practice through hybrid
              lessons, live gym exposure, career guidance, and special industry
              workshops.
            </p>
            <div className="academy-features__proof">
              <span>
                <strong>04</strong>
                Practical learning pillars
              </span>
              <span>
                <strong>100%</strong>
                Placement assistance
              </span>
            </div>
          </div>

          <div className="academy-features__cards">
            {academyFeatures.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <article className="academy-feature-card" key={feature.title}>
                  <span className="academy-feature-card__count">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="academy-feature-card__icon">
                    <Icon size={22} />
                  </div>
                  <div className="academy-feature-card__copy">
                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <div className="academy-affiliations">
        <Clients />
      </div>

      <section className="academy-section academy-faculty" id="faculty">
        <div className="container">
          <div className="academy-faculty__header">
            <div className="academy-section__head">
              <span>Expert Faculty</span>
              <h2>Learn from coaches who work with real clients.</h2>
            </div>
            <p>
              Senior CPT and nutrition educators guide students through
              technique, program design, communication, assessment, and career
              readiness.
            </p>
          </div>

          <div className="academy-faculty__grid">
            {faculty.map((member) => (
              <article className="academy-faculty-card" key={member.name}>
                <img src={member.image} alt={member.name} />
                <div>
                  <span>{member.role}</span>
                  <h3>{member.name}</h3>
                  <p>{member.exp}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="academy-section academy-champions">
        <div className="container">
          <div className="academy-section__head academy-section__head--center academy-champions__header">
            <span>Our Champions</span>
            <h2>{ourChampions.title}</h2>
            <p>{ourChampions.subtitle}</p>
          </div>

          <div className="academy-champions__grid">
            {ourChampions.items.map((champion, index) => (
              <article className="academy-champion-card" key={champion.id}>
                <video
                  src={champion.videoUrl}
                  controls
                  playsInline
                  preload="metadata"
                  aria-label={champion.title}
                />
                <div className="academy-champion-card__caption">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{champion.title}</strong>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="academy-section academy-contact" id="contact">
        <div className="container academy-contact__grid">
          <div>
            <span className="academy-eyebrow">
              <UsersRound size={17} />
              Admissions Support
            </span>
            <h2>Start your fitness career with RSF Fitness Academy.</h2>
            <p>
              Speak with our team to choose the right course, understand the
              schedule, and plan your certification pathway.
            </p>
          </div>

          <div className="academy-contact__cards">
            {contactItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  key={item.label}
                >
                  <Icon size={21} />
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
