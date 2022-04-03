import React, {useCallback, useEffect, useState, useRef} from 'react';

type Seconds = number;

type Props = {
  autostart?: boolean;
  children: any;
  duration: Seconds;
  onEnd: () => any;
};

const useTimer = ({
  autostart = false,
  children,
  duration = 0,
  onEnd,
}: Props) => {
  const [isRunning, setRunning] = useState(autostart);
  const [currentTime, setCurrentTime] = useState(Number(new Date()));
  const [endTime, setEndTime] = useState(currentTime + duration * 1000);
  const [remainingTime, setRemainingTime] = useState(duration);

  const interval = useRef<any>(null);

  const start = useCallback(() => {
    if (!isRunning && remainingTime > 0) {
      setRunning(true);
      setCurrentTime(Number(new Date()));
      setEndTime(Number(new Date()) + remainingTime);
    }
  }, [isRunning, remainingTime]);

  const stop = useCallback(() => {
    if (isRunning) {
      setRunning(false);
    }

    if (interval.current) {
      clearTimeout(interval.current);
      interval.current = null;
    }
  }, [isRunning]);

  const reset = useCallback(() => {
    const current = Number(new Date());
    setCurrentTime(current);
    setEndTime(current + duration * 1000);
  }, [duration]);

  const toggle = useCallback(() => {
    if (isRunning) {
      stop();
    } else {
      start();
    }
  }, [isRunning, start, stop]);

  useEffect(() => {
    reset();
  }, [duration]);

  // if autostart is set to true, autostart timer ON FIRST MOUNT ONLY!
  useEffect(() => {
    if (
      autostart === true &&
      // stableAutostart.current === true &&
      isRunning === false &&
      remainingTime / 1000 === duration
    ) {
      start();
    }
    // if this eslint rule is not disabled, the timer auto restarts
    // once the user clicks "reset", even if `isRunning` is false.
  }, []);
  // with exhaustive-deps:
  // }, [autostart, duration, isRunning, remainingTime, start]);

  // re-calculate remaining time whenever currentTime or endTime is updated
  useEffect(() => {
    const remaining = endTime - currentTime;
    if (remaining <= 0) {
      setRemainingTime(0);
      if (typeof onEnd === 'function') {
        onEnd();
      }
    } else {
      setRemainingTime(remaining);
    }
  }, [currentTime, endTime, onEnd]);

  // stop and clear timeout when timer is expired
  useEffect(() => {
    if (remainingTime === 0 && isRunning === true) {
      stop();
    }
  }, [isRunning, remainingTime, stop]);

  // force re-render
  useEffect(() => {
    if (remainingTime > 0 && isRunning === true && interval.current === null) {
      interval.current = setTimeout(() => {
        setCurrentTime(Number(new Date()));
      }, 67);
    }

    return () => {
      clearTimeout(interval.current);
      interval.current = null;
    };
  }, [isRunning, remainingTime]);

  const seconds = Math.floor((remainingTime / 1000) % 60);

  return children({
    days: Math.floor(remainingTime / 1000 / 60 / 60 / 24).toString(),
    hours: Math.floor((remainingTime / 1000 / 60 / 60) % 24)
      .toString()
      .padStart(2, '0'),
    minutes: Math.floor((remainingTime / 1000 / 60) % 60)
      .toString()
      .padStart(2, '0'),
    seconds: seconds.toString().padStart(2, '0'),
    milliseconds: (remainingTime - seconds * 1000).toString().padStart(3, '0'),
    reset,
    isRunning,
    endTime,
    remainingTime,
    start,
    stop,
    toggle,
  });
};

export default useTimer;
