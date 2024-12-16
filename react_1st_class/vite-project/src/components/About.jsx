import "./About.css"
import aboutImg from "../assets/mockUp.1f1358d78cf2c7e81657.png"

const About = () => {
  return (
    <div className="a_c">
      <div className="w">
        <div className="a_left">
          <h3>About ecoBin</h3>

          <b>
            Years of diligent research and unwavering dedication to
            environmental consciousness
          </b>

          <p>
            ecoBin, a is a waste management company dedicated to reducing waste,
            promoting recycling, and proper waste disposal. Our team of experts
            provides innovative and eco-friendly solutions for businesses and
            communities. Join us in our mission to create a cleaner and
            healthier environment for current and future generations. 🌍♻️
          </p>
        </div>

        <div className="a_img_wrap">
          <img className="a_img" src={aboutImg} />
        </div>
      </div>
    </div>
  )
}

export default About
