import Image from "next/image";

const facultyData = [
  {
    id: 1,
    name: "Mr. Neeraj Shriwal",
    faculty: "Senior CPT Faculty",
    exp: "15+ years of experience",
    img: "/imgs/course/Mr. Neeraj Shriwal.jpg",
    achievements: [
      "Certified Master Trainer",
      "iCREPS Registered Fitness Professional",
      "Sports Nutritionist",
      "Healing massage",
      "Certified Personal Trainer from GGFI",
      "10 years experience in Fitness industry",
    ],
  },
  {
    id: 2,
    name: "Mr. Vrushal Somwanshi",
    faculty: "Senior CPT Faculty",
    exp: "12+ years of experience",
    img: "/imgs/course/Mr. Vrushal Somwanshi.jpg",
    achievements: [
      "Diploma in sports science",
      "Certified Personal Trainer from GGFI",
      "Certified Personal Trainer from FSSA",
      "Certified Personal Trainer from CFA",
      "Certified Sports nutritionist from ACE",
      "10 years experience in Fitness industry",
    ],
  },
  {
    id: 2,
    name: "Ms. Malavika Kulkarni",
    faculty: "Senior CNS  Faculty",
    exp: "10+ years of experience",
    img: "/imgs/course/Ms. Malavika Kulkarni.jpg",
    achievements: [
      "Diploma in sports science",
      "Certified Personal Trainer from GGFI",
      "Certified Personal Trainer from FSSA",
      "Certified Personal Trainer from CFA",
      "Certified Sports nutritionist from ACE",
      "10 years experience in Fitness industry",
    ],
  },
];

const Faculty = () => {
  return (
    <section className="faculty section-padding">
      <div className="container">
        <div className="heading-wrapper" data-eyebrow="Expert Faculty">
          <h2 className="title">
            Our <span>Faculty</span>
          </h2>
          <p>Unlocking Your Potential for Success in Every Industry</p>
        </div>

        <div className="items">
          {facultyData.map((faculty) => (
            <div className="item" key={faculty.id}>
              <div className="img-wrapper">
                <Image
                  src={faculty.img}
                  alt={faculty.name}
                  width={400}
                  height={500}
                  priority
                />
              </div>

              <div className="content">
                <div className="name">{faculty.name}</div>
                <div className="exp">{faculty.exp}</div>
                <p className="faculty">{faculty.faculty}</p>
                {/* <ul>
                  {faculty.achievements.map((achieve, idx) => (
                    <li key={idx}>{achieve}</li>
                  ))}
                </ul> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;
