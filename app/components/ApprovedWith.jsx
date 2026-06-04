import Image from "next/image"

const ApprovedWith = () => {
    return (
        <section className="approved section-padding">
            <div className="container">
                <div className="heading-wrapper" data-eyebrow="Approvals">
                    <div className="title">Approved <span>With</span></div>
                    <p>Unlocking Your Potential for Success in Every Industry</p>
                </div>

                <div className="items">
                    <div className="item">
                        <img src="/imgs/affiliat/img-5.webp" alt="img-5" />
                    </div>
                    <div className="item">
                        <img src="/imgs/affiliat/img-6.webp" alt="img-6" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ApprovedWith
