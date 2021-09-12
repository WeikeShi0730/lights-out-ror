import React, { useState, useEffect, useRef, Fragment } from "react";
import "./stopwatch.styles.scss";

const Stopwatch = ({ onLightsChange, clickedInside }) => {
  const [on, setOn] = useState(false);
  //const [getClick, setGetClick] = useState(click);
  const [click, setClick] = useState(0);
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(0);
  const [jump, setJump] = useState(false);
  const [intervalTimer, setIntervalTimer] = useState(0);
  const [intervalLights, setIntervalLights] = useState(0);
  const [timeOut, setTimeOut] = useState(0);
  const [currentBest, setCurrentBest] = useState(Number.MAX_VALUE);

  //const handleOnClick = () => {
  // if (clickedinside === "true") {
  //   if (click === 2) {
  //     setClick(0);
  //     resetTimer();
  //   } else {
  //     if (click === 0) {
  //       startLights();
  //     } else if (click === 1) {
  //       stopTimer();
  //     }
  //     setClick(click + 1);
  //   }
  // }
  //};

  const intervalLightsRef = useRef(intervalLights);
  intervalLightsRef.current = intervalLights;
  const startLights = () => {
    let lights = 0;
    setIntervalLights(
      setInterval(() => {
        lights++;
        onLightsChange(lights);
        if (lights === 5) {
          addRandom();
          clearInterval(intervalLightsRef.current);
        }
      }, 1000)
    );
  };

  const addRandom = () => {
    const random = Math.floor((Math.random() * 3 + 2) * 1000);
    setTimeOut(
      setTimeout(() => {
        setOn(true);
        startTimer();
      }, random)
    );
  };

  const onRef = useRef(on);
  onRef.current = on;
  const startTimer = () => {
    if (click === 0) {
      onLightsChange(0);
      const startTime = window.performance.now() - time;
      setIntervalTimer(
        setInterval(() => {
          setTimer(window.performance.now() - startTime);
        }, 1)
      );
    } else {
      console.log("error");
    }
  };

  const stopTimer = () => {
    if (onRef.current === false) {
      jumpStart();
      return;
    }

    if (click === 1) {
      setTime(0);
      setOn(false);
      handleBestTime(timer);
      clearInterval(intervalTimer);
    } else {
      console.log("error");
    }
  };
  const resetTimer = () => {
    if (click === 2) {
      setTime(0);
      setTimer(0);
      setOn(false);
      setJump(false);
      onLightsChange(0);
    } else {
      console.log("error");
    }
  };

  const jumpStart = () => {
    setJump(true);
    clearInterval(intervalTimer);
    clearInterval(intervalLights);
    clearTimeout(timeOut);
    return;
  };

  const convertFormat = (timer) => {
    let milliseconds = ("00" + (Math.floor(timer) % 1000)).slice(-3);
    let seconds = ("0" + (Math.floor(timer / 1000) % 60)).slice(-2);
    return { milliseconds, seconds };
  };

  const handleBestTime = (currentTimer) => {
    setCurrentBest(localStorage.getItem("best"));
    if (currentTimer < currentBest) {
      setCurrentBest(currentTimer);
    }
  };

  useEffect(() => {
    localStorage.setItem("best", currentBest);
  }, [currentBest]);

  useEffect(() => {
    if (clickedInside !== 0) {
      if (click === 2) {
        setClick(0);
        resetTimer();
      } else {
        if (click === 0) {
          startLights();
        } else if (click === 1) {
          stopTimer();
        }
        setClick(click + 1);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clickedInside]);

  return (
    <Fragment>
      <h3>
        tap/click when you are ready to race, and tap again when the lights go
        out
      </h3>
      <div className="time">
        {jump ? (
          <div>jump start</div>
        ) : (
          <div>
            {convertFormat(timer).seconds}.{convertFormat(timer).milliseconds}
          </div>
        )}
      </div>

      <h2>
        best:{" "}
        {currentBest < Number.MAX_VALUE
          ? `${convertFormat(currentBest).seconds}.${
              convertFormat(currentBest).milliseconds
            }`
          : `no data`}
      </h2>
      <p>
        create by{" "}
        <a href="https://www.linkedin.com/in/weike-shi/">@Weike Shi</a>
      </p>
    </Fragment>
  );
};

export default Stopwatch;
