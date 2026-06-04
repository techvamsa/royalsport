"use client";

import { useState } from "react";

const tabData = [
  {
    key: "achievements",
    title: "Our Achievements",
    subtitle: "Proven results in training, gym setups and customer satisfaction.",
  },
  {
    key: "affiliated",
    title: "Affiliated By",
    subtitle: "Trusted partners and affiliations that strengthen our business reach.",
  },
  {
    key: "approved",
    title: "Approved With",
    subtitle: "Quality certifications and approval badges for credibility.",
  },
];

const achievements = [
  { value: "200+", label: "Students Trained", icon: "/imgs/ach-1.webp" },
  { value: "5000+", label: "Gym Setups", icon: "/imgs/barbell.png" },
  { value: "14+", label: "Years Experience", icon: "/imgs/ach-3.webp" },
  { value: "99%", label: "Client Satisfaction", icon: "/imgs/ach-4.webp" },
];

const affiliateLogos = [
  "/imgs/affiliat/img-1.webp",
  "/imgs/affiliat/img-2.webp",
  "/imgs/affiliat/img-3.webp",
  "/imgs/affiliat/img-4.webp",
];

const approvalLogos = [
  "/imgs/affiliat/img-5.webp",
  "/imgs/affiliat/img-6.webp",
];

const Achievements = () => {
  const [activeTab, setActiveTab] = useState("achievements");
  const activeTabData = tabData.find((tab) => tab.key === activeTab);

  return (
    <section className="achievement-tabs section-padding" id="achievement-tabs">
      <div className="container">
        <div className="tab-header">
          <div className="tab-list">
            {tabData.map((tab) => (
              <button
                key={tab.key}
                type="button"
                className={`tab-button ${activeTab === tab.key ? "active" : ""}`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <div className="tab-copy">
            <h2>{activeTabData.title}</h2>
            <p>{activeTabData.subtitle}</p>
          </div>
        </div>

        <div className="tab-panel">
          {activeTab === "achievements" && (
            <div className="achievement-panel">
              <div className="achievement-deco" />
              <div className="achievement-content">
                <div className="stats-grid">
                  {achievements.map((item) => (
                    <div className="stat-card" key={item.label}>
                      <div className="stat-icon">
                        <img src={item.icon} alt={item.label} />
                      </div>
                      <div className="stat-value">{item.value}</div>
                      <div className="stat-label">{item.label}</div>
                    </div>
                  ))}
                </div>

                <div className="achievement-summary">
                  <div className="summary-card">
                    <strong>Trusted Since 2012</strong>
                    <p>Delivering high-quality gym setups and training support across India.</p>
                  </div>
                  <div className="summary-card">
                    <strong>Expert Support</strong>
                    <p>From consultation to installation, our team ensures a seamless experience.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "affiliated" && (
            <div className="logo-panel">
              {affiliateLogos.map((logo, index) => (
                <div className="logo-card" key={index}>
                  <img src={logo} alt={`Affiliated logo ${index + 1}`} />
                </div>
              ))}
            </div>
          )}

          {activeTab === "approved" && (
            <div className="logo-panel approved-panel">
              {approvalLogos.map((logo, index) => (
                <div className="logo-card" key={index}>
                  <img src={logo} alt={`Approval logo ${index + 1}`} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

