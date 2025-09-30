import { useEffect, useState } from "react";

const ProgressBar = ({ progress }) => {
  const [animatedProgress, setanime] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setanime(progress), 100;
    });
  }, [progress]);
  return (
    <div className="outer">
      <div
        className="inner"
        style={{
          //   width: `${progress}%`,
          transform: `translateX(${animatedProgress - 100}%)`,
          color: animatedProgress < 5 ? "black" : "white",
        }}
        role="progressbar"
        aria-valuemax="100"
        aria-valuenow={progress}
        aria-valuemin="0"
      >
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;
