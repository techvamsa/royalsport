"use client";

const achievementMetrics = [
  { value: "200+", label: "Students Trained", detail: "Hands-on fitness coaching and results-driven programs." },
  { value: "5000+", label: "Gym Setups", detail: "Equipment delivery and installation across India." },
  { value: "14+", label: "Years Experience", detail: "Deep domain expertise in fitness and gym solutions." },
  { value: "99%", label: "Client Satisfaction", detail: "Trusted by gym owners, trainers, and fitness brands." },
];

const OurAchievements = () => {
  return (
    <section className="our-achievements section-padding">
      <div className="container">
        <div className="heading-wrapper text-center" data-eyebrow="RSF Results">
          <div className="title">Our <span>Achievements</span></div>
          <p>Powering fitness success with proven results, expert gym setups, and strong customer trust.</p>
        </div>

        <div className="achievement-grid">
          {achievementMetrics.map((metric) => (
            <div className="achievement-card" key={metric.label}>
              <div className="achievement-value">{metric.value}</div>
              <div className="achievement-label">{metric.label}</div>
              <p>{metric.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurAchievements;
