import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <p className="githubLink">
        <a
          href="https://github.com/Lucienne85/weather-app-react"
          target="_blank"
          className="gitLink"
          rel="noopener noreferrer"
        >
          Open-source code
        </a>
        by Lucienne de Boer
        <a
          href="https://www.linkedin.com/in/luciennedeboer/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/001/973/original/linkedin.png?1597418766"
            alt="LinkedIn logo"
            className="linkedinLogo"
          />
        </a>
      </p>
      <footer>
        Icons made by
        <a
          href="https://www.flaticon.com/authors/freepik"
          title="Freepik"
          target="_blank"
          rel="noopener noreferrer"
        >
          Freepik
        </a>
        ,
        <a
          href="https://www.flaticon.com/authors/iconixar"
          title="iconixar"
          target="_blank"
          rel="noopener noreferrer"
        >
          iconixar
        </a>
        ,
        <a
          href="https://www.flaticon.com/authors/srip"
          title="srip"
          target="_blank"
          rel="noopener noreferrer"
        >
          srip
        </a>
        and
        <a
          href="https://www.flaticon.com/free-icon/snowflake_2942944"
          title="surang"
          target="_blank"
          rel="noopener noreferrer"
        >
          surang
        </a>
        from
        <a
          href="https://www.flaticon.com/"
          title="Flaticon"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.flaticon.com
        </a>
      </footer>
    </div>
  );
}
