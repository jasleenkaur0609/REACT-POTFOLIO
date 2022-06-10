import "./about.css";
import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.LsuJulxJrQW28Rp6efYZ-gHaE7&pid=Api&P=0&w=240&h=160"
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
          I am Jasleen Kaur. I am currently studying in 1st year of B.Tech. I have knowledge of different programming languages
          such as python, HTML, CSS, Javascript, C++ and React.
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
