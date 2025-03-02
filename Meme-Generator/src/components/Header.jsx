import "../css/Header.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-inner">
          <a className="nav-brand-link" href="index.html">
            <div className="nav-brand">
              <img className="nav-img" src="/images/troll-face.png" alt="" />
              <span className="nav-title">Meme Generator</span>
            </div>
          </a>
          <div className="nav-subtitle">React Project</div>
        </div>
      </div>
    </nav>
  );
}
