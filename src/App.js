import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather />
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