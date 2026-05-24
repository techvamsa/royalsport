import Image from "next/image"

const ApprovedBy = () => {
    return (
        <section className="approved section-padding">
            <div className="container">
                <div className="heading-wrapper">
                    <div className="title">Affiliated <span>By</span></div>
                    <p>Unlocking Your Potential for Success in Every Industry</p>
                </div>

                <div className="items">
                    <div className="item">
                        <img src="/imgs/affiliat/img-1.webp" alt="img-1" />
                    </div>
                    <div className="item">
                        <img src="/imgs/affiliat/img-2.webp" alt="img-2" />
                    </div>
                    <div className="item">
                        <img src="/imgs/affiliat/img-3.webp" alt="img-3" />
                    </div>
                    <div className="item">
                        <img src="/imgs/affiliat/img-4.webp" alt="img-4" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ApprovedBy