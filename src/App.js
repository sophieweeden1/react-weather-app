import "./App.css";
import WeatherSearch from "./Weather";

export default function App() {
  return (
    <div className="App">
      <WeatherSearch />
      <footer>
      <a
          className="github"
          href="https://github.com/sophieweeden1/react-weather-app"
        >
          View on GitHub
        </a>
        </footer>
    </div>
  );
}