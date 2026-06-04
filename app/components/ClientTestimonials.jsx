"use client";

import {
  ArrowUpRight,
  MapPin,
  Quote,
  Star,
} from "lucide-react";
import "@/app/styles/testimonials.scss";

const googleMapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Royal%20Sports%20N%20Fitness%20(RSF)%2C%20Gali%20No.%206%2C%20Sai%20Puram%2C%20Delhi%20Rd%2C%20Surya%20Palace%20Colony%2C%20Meerut%2C%20Uttar%20Pradesh%20250002%2C%20India";

const mapEmbedUrl =
  "https://www.google.com/maps?q=Royal%20Sports%20N%20Fitness%20(RSF)%2C%20Gali%20No.%206%2C%20Sai%20Puram%2C%20Delhi%20Rd%2C%20Surya%20Palace%20Colony%2C%20Meerut%2C%20Uttar%20Pradesh%20250002%2C%20India&output=embed";

const testimonials = [
  {
    name: "Gym Owner",
    location: "Meerut",
    text: "RSF made the complete gym setup easier with practical equipment guidance, delivery support, and a clear plan for our floor space.",
  },
  {
    name: "Fitness Studio Partner",
    location: "Delhi NCR",
    text: "The team helped us choose machines that matched our budget and training needs without overcomplicating the process.",
  },
  {
    name: "Training Centre Founder",
    location: "Uttar Pradesh",
    text: "From consultation to installation, the experience felt organized and focused on getting the gym ready for real daily use.",
  },
];

const ClientTestimonials = () => {
  return (
    <section className="google-testimonials section-padding-bottom" id="feedback">
      <div className="container">
        <div className="google-testimonials__shell">
          <div className="google-testimonials__header">
            <div>
              <span className="google-testimonials__eyebrow">
                Customer Stories
              </span>
              <h2>Client Testimonials</h2>
              <p>
                Hear from gym owners, trainers, and fitness entrepreneurs who
                trust Royal Sports N Fitness for equipment, setup planning, and
                long-term support.
              </p>
            </div>

            <a
              className="google-testimonials__review-link"
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View On Google
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="google-testimonials__layout">
            <div className="google-testimonials__location">
              <div className="google-testimonials__location-copy">
                <span>Royal Sports N Fitness (RSF)</span>
                <h3>Visit our Meerut showroom and check the latest reviews.</h3>
                <p>
                  Gali No. 6, Sai Puram, Delhi Rd, Surya Palace Colony, Meerut,
                  Uttar Pradesh 250002, India
                </p>
              </div>

              <div className="google-testimonials__map">
                <iframe
                  src={mapEmbedUrl}
                  title="Royal Sports N Fitness Google Map"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="google-testimonials__pin">
                <MapPin size={18} />
                Meerut, Uttar Pradesh
              </div>
            </div>

            <div className="google-testimonials__cards">
              {testimonials.map((testimonial, index) => (
                <article
                  className="google-testimonials__card"
                  key={`${testimonial.name}-${testimonial.location}`}
                >
                  <Quote className="google-testimonials__quote" size={34} />
                  <div className="google-testimonials__stars" aria-label="5 star review">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star
                        size={17}
                        fill="currentColor"
                        strokeWidth={0}
                        key={starIndex}
                      />
                    ))}
                  </div>
                  <p>{testimonial.text}</p>
                  <div className="google-testimonials__person">
                    <span>{testimonial.name}</span>
                    <small>{testimonial.location}</small>
                    <em>{String(index + 1).padStart(2, "0")}</em>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="google-testimonials__live">
            <div className="google-testimonials__live-head">
              <span>Latest From Google</span>
              <p>Live reviews load here from the Google Reviews widget.</p>
            </div>
            <div
              className="elfsight-app-8ac0d9df-c304-4dc9-851a-4e160b2ef7b1"
              data-elfsight-app-lazy
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
