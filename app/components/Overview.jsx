import Image from "next/image"
import Link from "next/link"

const Overview = () => {
    return (
        <section className="overview section-padding">
            <img src="/imgs/sport-row-bg.webp" alt="bg" className="bg" />
            <div className="container">
                <div className="inner-wrapper">
                    <div className="left">
                        <video
                            src="/imgs/video.mp4"
                            controls
                            preload="metadata"
                            controlsList="nodownload"
                            poster="/imgs/video-bg.webp"
                        />
                    </div>

                    <div className="right">
                        <div className="heading-wrapper">
                            <div className="title">Overview of <span>The RSF Fitness Academy  </span></div>
                        </div>

                        <p>The fitness academy provides aspiring fitness professionals with the necessary skills and
                            training to excel in the industry.</p>
                        <p>Meanwhile, the franchise business has enabled the company to expand its reach and offer
                            high-quality products and services to more customers.</p>
                        <p>Royal Sports and Fitness remains committed to providing cutting-edge products and exceptional
                            service to fitness enthusiasts and businesses alike.</p>

                        <Link href="tel:+91-8126299638" className="btn"><img src="/imgs/call.svg" alt="Call" /> Enroll Now</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Overview