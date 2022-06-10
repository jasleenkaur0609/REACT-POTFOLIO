import "./about.css";
import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://th.bing.com/th/id/OIP.4uBiWBfNGqHGWZrSh6qvdwHaE8?pid=ImgDet&rs=1"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
          I am Jashanpreet singh. I am currently studying in 1st year of B.Tech. I have knowledge of different programming languages
          such as python, HTML, CSS, Javascript, C++ and React.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              I recieved the international Designer award in 2021.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
