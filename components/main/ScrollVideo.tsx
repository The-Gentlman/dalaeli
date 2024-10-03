"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/ScrollVideo.module.css";

interface ScrollVideoProps {
  videoSrc: string;
}

const ScrollVideo: React.FC<ScrollVideoProps> = ({ videoSrc }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [videoHeight, setVideoHeight] = useState(0);
  const [debugInfo, setDebugInfo] = useState<string>("");
  const videoStart = 4; // Start at 4 seconds
  const videoEnd = 10; // End at 10 seconds

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;

    if (!video || !container) return;

    const updateDebugInfo = () => {
      setDebugInfo(
        `Video Time: ${video.currentTime.toFixed(2)}s, Duration: ${video.duration.toFixed(2)}s, Ready State: ${video.readyState}`,
      );
    };

    const setInitialVideoTime = () => {
      if (video.readyState >= 2) {
        video.currentTime = videoStart;
        updateDebugInfo();
      } else {
        video.addEventListener(
          "loadedmetadata",
          () => {
            video.currentTime = videoStart;
            updateDebugInfo();
          },
          { once: true },
        );
      }
    };

    setInitialVideoTime();
    setVideoHeight(window.innerHeight); // Set to full viewport height

    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = Math.max(
        0,
        Math.min(1, scrollPosition / maxScroll),
      );

      const videoDuration = videoEnd - videoStart;
      const newTime = videoStart + scrollFraction * videoDuration;

      if (isFinite(newTime) && newTime !== video.currentTime) {
        video.currentTime = Math.max(videoStart, Math.min(newTime, videoEnd));
        updateDebugInfo();
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    video.addEventListener("timeupdate", updateDebugInfo);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      video.removeEventListener("timeupdate", updateDebugInfo);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={styles.videoContainer}
      style={{ height: `${videoHeight}px` }}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        preload="auto"
        className={styles.video}
        muted
        playsInline
      />
      <div className={styles.debugInfo}>{debugInfo}</div>
    </div>
  );
};

export default ScrollVideo;
