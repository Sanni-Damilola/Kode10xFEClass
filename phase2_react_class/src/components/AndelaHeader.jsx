import "../App.css"
import logo from "../assets/66267ca5100e5bf7643aa0d6_andela_logo.svg"
import { CgProfile } from "react-icons/cg"
import { IoSearchOutline } from "react-icons/io5"

const AndelaHeader = () => {
  return (
    <header>
      <div className="wrapper">
        <div className="navs">
          <img className="logo" src={logo} />
          <nav>Why Andela</nav>
          <nav>Adaptive Hiring</nav>
          <nav>Solutions</nav>
          <nav>Platform</nav>
          <nav>resources</nav>
          <nav>talent</nav>
          <nav>about</nav>
        </div>

        <div className="iconWrap">
          <CgProfile style={{ fontSize: 25, color: "rgb(0, 0, 0, 0.6)" }} />
          <IoSearchOutline className="searchIcon" />
          <button>hire talent</button>
        </div>
      </div>
    </header>
  )
}

export default AndelaHeader
