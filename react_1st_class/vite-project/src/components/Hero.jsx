import "./Hero.css"
import rightimg from "../assets/ecobin top.png"
import { CiGlobe } from "react-icons/ci"
import { FaRecycle } from "react-icons/fa6"
import { IoEarth } from "react-icons/io5"

const Hero = () => {
  return (
    <div className="container">
      <div className="hero_wrapper">
        <div className="left">
          <h1>
            dispose waste porperly & promote recycling, for a greener future
          </h1>
          <p>
            Ready to be an Eco-champion? let team up to ensure proper waste
            disposal and promote recycling withinour communities.
            <span>
              Small action can make a big impact on our planet!
              <FaRecycle className="recycle" />
              <IoEarth className="earth" />
            </span>
          </p>
          <button className="herobutton">
            Join Now!
            <CiGlobe className="globe" />
          </button>
        </div>
        <div className="right">
          <img src={rightimg} />
        </div>
      </div>
    </div>
  )
}

export default Hero
