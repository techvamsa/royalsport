"use client";

import { ArrowUpRight, Instagram, Play, Youtube } from "lucide-react";
import "@/app/styles/media-sections.scss";

const reels = [
  {
    title: "Gym floor energy",
    tag: "Training",
    src: "https://www.instagram.com/reel/DVqidDLiPed/embed",
  },
  {
    title: "Equipment in action",
    tag: "Machines",
    src: "https://www.instagram.com/reel/DXeMCVfCGH7/embed",
  },
  {
    title: "RSF community pulse",
    tag: "Community",
    src: "https://www.instagram.com/reel/DXtwiOxiBTb/embed",
  },
];

const MediaSections = () => {
  return (
    <section className="media-studio section-padding">
      <div className="container">
        <div className="media-studio__header">
          <span>RSF Media</span>
          <h2>Stories, training moments, and the vision behind RSF.</h2>
        </div>

        <div className="founder-spotlight">
          <div className="founder-spotlight__video">
            <div className="founder-spotlight__bar">
              <span />
              <span />
              <span />
              <strong>Founder&apos;s View</strong>
            </div>
            <iframe
              src="https://www.youtube.com/embed/OOQ7W0aHAb0?si=GWbRFEm-D82_ccRT"
              title="Founder's View"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <div className="founder-spotlight__copy">
            <span className="media-kicker">
              <Play size={15} />
              From The Founder
            </span>
            <h3>
              Built with a clear mission: stronger fitness businesses across
              India.
            </h3>
            <p>
              Hear from Mr. World Thakur Anoop Singh on the mindset, standards,
              and long-term vision behind Royal Sports N Fitness.
            </p>
            <a
              className="media-action"
              href="https://www.youtube.com/@royalsportsnfitness"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube size={18} />
              Watch More
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

        <div className="social-wall">
          <div className="social-wall__intro">
            <span className="media-kicker">
              <Instagram size={15} />
              RSF Social Feed
            </span>
            <h3>Move. Build. Repeat.</h3>
            <p>
              A quick look at the energy inside RSF: equipment demos, gym-floor
              moments, athlete mindset, and real training culture.
            </p>
            <a
              className="media-action media-action--light"
              href="https://www.instagram.com/royalsportnfitness/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={18} />
              Follow The Journey
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="social-wall__reels">
            {reels.map((reel, index) => (
              <div className="social-wall__card" key={reel.src}>
                <div className="social-wall__frame">
                  <iframe
                    src={reel.src}
                    title={reel.title}
                    loading="lazy"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                    scrolling="no"
                  />
                </div>
                <div className="social-wall__meta">
                  <span>{reel.tag}</span>
                  <strong>{reel.title}</strong>
                  <em>{String(index + 1).padStart(2, "0")}</em>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSections;
