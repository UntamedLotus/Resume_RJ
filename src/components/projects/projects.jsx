import "./projects.scss";

function Project() {
  return (
    <div className="project-section">
      <h2>Portfolio</h2>
      <div className="project-card">
        <div className="project">
          <a
            href="https://to-do-app-rj.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="app-img"
              src="https://i.postimg.cc/fLkpYbT7/Screenshot-31.png"
              alt="to-do-app UI made with React and Sass"
            />
          </a>
        </div>

        <div className="project">
          <a href="https://welkin-r2.web.app/" target="_blank" rel="noreferrer">
            <img
              className="app-img"
              src="https://i.postimg.cc/3NfwnNgK/Screenshot-33.png"
              alt="App based on information about celestial bodies"
            />
          </a>
        </div>

        <div className="project">
          <a
            href="https://meme-generator-r2.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="app-img"
              src="https://i.postimg.cc/VLsMgbcc/Screenshot-32.png"
              alt="meme-generator-app made with React"
            />
          </a>
        </div>

        <div className="project">
          <a
            href="https://lesemarke-rj.firebaseapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="app-img"
              src="https://i.postimg.cc/4dNZqZ4n/Screenshot-34.png"
              alt="App for bookmarking functionality"
            />
          </a>
        </div>

        <div className="project">
          <a
            href="https://nextin-ruth.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="app-img"
              src="https://i.postimg.cc/hGCPSh5V/Screenshot-35.png"
              alt="A web page for AI company using HTML and CSS"
            />
          </a>
        </div>

        <div className="project">
          <a href="https://mapty.netlify.app/" target="_blank" rel="noreferrer">
            <img
              className="app-img"
              src="https://i.postimg.cc/nLLpwphr/Screenshot-36.png"
              alt="Geolocation tracker app made with Vanilla JavaScript"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
