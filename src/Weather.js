import React from "react";

export default function Weather() {
  return (
    <div>
      <div className="container-fluid">
        <div
          className="card bg-primary mb-3 border-light mb-3"
          stylename="width: 80%"
        >
          <div className="card-body">
            <div className="search">
              <form>
                <input
                  type="text"
                  placeholder="Enter a city here"
                  class="searchbar"
                  id="userinput"
                />
                <button type="submit" class="btn btn-light" id="submit-button">
                  Submit
                </button>
                <button
                  type="button"
                  class="btn btn-light"
                  id="location-button"
                >
                  <i class="fas fa-map-marker-alt"></i>
                  Current Location
                </button>
              </form>
            </div>

            <h3 className="main-date">Sunday</h3>

            <div className="main-weather">
              <img src="" alt="weather icon" id="main-weather-icon" />
              <h2 className="card-title" id="city">
                London
              </h2>
              <h1 className="temp" id="actual-temp">
                22
              </h1>

              <button className="btn btn-light" id="celcius-button">
                C
              </button>
              <button className="btn btn-light" id="fahrenheit-button">
                F
              </button>
              <br />
              <h4 className="description">Sunny</h4>

              <h5 className="humidity">Humidity:</h5>
              <h5 className="wind">Wind:</h5>
            </div>
            <br />

            <div className="row weekdays" id="forecast"></div>
          </div>
        </div>
        <a
          className="github"
          href="https://github.com/sophieweeden1/vanillajs-weather-app"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
}
