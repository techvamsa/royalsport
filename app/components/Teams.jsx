const teamData = [
  {
    id: 1,
    src: "/imgs/team-1.mp4",
    controls: true,
    playsInline: true,
    muted: true,
    preload: "metadata",
  },
  {
    id: 2,
    src: "/imgs/team-2.mp4",
    controls: true,
    preload: "metadata",
    controlsList: "nodownload",
  },
  {
    id: 3,
    src: "/imgs/team-3.mp4",
    controls: true,
    playsInline: true,
    muted: true,
    preload: "metadata",
  },
  {
    id: 4,
    src: "/imgs/team-4.mp4",
    controls: true,
    playsInline: true,
    muted: true,
    preload: "metadata",
  },
  {
    id: 5,
    src: "/imgs/video/feedback.mp4",
    controls: true,
    playsInline: true,
    muted: true,
    preload: "metadata",
  },
  {
    id: 6,
    src: "/imgs/video/feedback1.mp4",
    controls: true,
    playsInline: true,
    muted: true,
    preload: "metadata",
  },
  {
    id: 7,
    src: "/imgs/video/feedback2.mp4",
    controls: true,
    playsInline: true,
    muted: true,
    preload: "metadata",
  },
  {
    id: 8,
    src: "/imgs/video/feedback3.mp4",
    controls: true,
    playsInline: true,
    muted: true,
    preload: "metadata",
  },
  {
    id: 9,
    src: "/imgs/video/feedback4.mp4",
    controls: true,
    playsInline: true,
    muted: true,
    preload: "metadata",
  },
  {
    id: 10,
    src: "/imgs/video/feedback5.mp4",
    controls: true,
    playsInline: true,
    muted: true,
    preload: "metadata",
  },
];

const Teams = () => {
  return (
    <section className="team section-padding">
      <div className="container-fluid">
        <div className="heading-wrapper">
          <div className="title">
            What Our <span>Champions Say</span>
          </div>
          <p>
            Real Stories of Fitness, Performance & Success with RoyalSportsnFitness
          </p>
        </div>

        <div className="items">
          {teamData.map((video) => (
            <div key={video.id} className="item">
              <video {...video} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
