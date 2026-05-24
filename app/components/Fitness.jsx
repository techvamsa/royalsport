import Image from "next/image"
import Link from "next/link"

const Fitness = () => {
    return (
        <section className="fitness section-padding">
            <div className="container">
                <div className="inner-wrapper">
                    <div className="heading-wrapper">
                        <h2 className="title">Premium Fitness Equipment for <span>Every Goal </span></h2>
                        <p>RSF Fitness Academy delivers top-quality fitness equipment and complete gym setup solutions — durable, reliable, and designed to elevate every workout</p>
                    </div>
                    <Link href="tel:+91-8126299638" className="btn"><img src="/imgs/call.svg" alt="Call" />Call Us</Link>
                </div>
            </div>
        </section>
    )
}

export default Fitness