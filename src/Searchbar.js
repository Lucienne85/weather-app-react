import React from "react";
import "./Searchbar.css";

export default function Searchbar() {
  return (
    <div className="Searchbar">
      <div className="row">
        <form className="totalform">
          <input
            className="form-control"
            type="text"
            placeholder="Search your location"
            autoComplete="off"
          />
          <button className="searchButton" type="submit">
            <i className="fas fa-search"></i>
          </button>
          <button className="currentLocation" id="current-location">
            <img
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/001/426/original/location.png?1593886732"
              alt="locationIcon"
              className="locationIcon"
            />
          </button>
        </form>
      </div>
    </div>
  );
}
