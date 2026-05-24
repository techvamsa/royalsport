
import Form from "@/app/components/Form"
const BannerBottom = () => {
    return (
        <section className="banner bottom" id="bottomform">
            <div className="inner-wrapper">
                <div className="right">
                    <div className="form-container">
                        <div className="heading-wrapper">
                            <h1 className="title">Request a Free <span>Call Back</span></h1>
                            <p>Join RSF Fitness Academy and elevate your fitness training career to new heights.</p>
                        </div>

                         <Form/>
                    </div>
                </div>

                <div className="left">
                    <iframe loading="lazy"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3491.1250780555947!2d77.68365560000001!3d28.9540144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c6468e1dc5fdb%3A0xc4ff3ab2c1651e41!2sRoyal%20Sports%20N%20Fitness%20(RSF)!5e0!3m2!1sen!2sin!4v1757189029520!5m2!1sen!2sin"
                        title="Royal sports and fitness J.K. Tower Basement, Pandit Ji Ki Thadi, Near Hotel Manohar Palace, Kalwar Road, Jhotwara, Jaipur, Rajasthan"
                        aria-label="Royal sports and fitness J.K. Tower Basement, Pandit Ji Ki Thadi, Near Hotel Manohar Palace, Kalwar Road, Jhotwara, Jaipur, Rajasthan"></iframe>
                </div>
            </div>
        </section>
    )
}

export default BannerBottom