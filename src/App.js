import "./styles.css";
import ProgressBar from "./ProgressBar";
export default function App() {
  const bars = [5, 10, 20, 90, 100, 4];
  return (
    <div className="App">
      <h1>Progress Bar</h1>
      {bars.map((item) => (
        <ProgressBar key={item} progress={item} />
      ))}
    </div>
  );
}
