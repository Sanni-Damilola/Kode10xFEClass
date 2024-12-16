import "./Header.css"

const Header = () => {
  return (
    <header>
      <div className="parent">
        <div className="first">
          <h1>ecoBin</h1>
          <nav>home</nav>
          <nav>about</nav>
          <nav>features</nav>
          <nav>join us</nav>
        </div>
        <button>create an account</button>
      </div>
    </header>
  )
}

export default Header
