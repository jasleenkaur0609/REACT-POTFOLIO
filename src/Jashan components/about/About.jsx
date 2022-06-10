import "./about.css";
import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title" style = {{color:'#183a1d'}}>About Me</h1>
        <p className="a-sub" style = {{color:'#183a1d'}}>
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc" style = {{color:'#183a1d'}}>
        I am Jashan Romanov. I am currently studying in 1st year of B.Tech. I
          have knowledge of different programming languages such as python,
          HTML, CSS, Javascript, C++ and React.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc" style = {{color:'#183a1d'}}>
              I recieved the international Designer award in 2021.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;