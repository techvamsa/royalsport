"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Play, X } from "lucide-react";

const AcademyVideoButton = ({ videoSrc, label, children, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openedFullscreenRef = useRef(false);
  const videoRef = useRef(null);

  const openVideo = async () => {
    setIsOpen(true);

    if (document.fullscreenEnabled && !document.fullscreenElement) {
      try {
        await document.documentElement.requestFullscreen();
        openedFullscreenRef.current = true;
      } catch {
        openedFullscreenRef.current = false;
      }
    }
  };

  const closeVideo = useCallback(() => {
    setIsOpen(false);

    if (openedFullscreenRef.current && document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }

    openedFullscreenRef.current = false;
  }, []);

  useEffect(() => {
    if (!isOpen) {
      videoRef.current?.pause();
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
      }
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeVideo();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeVideo, isOpen]);

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={openVideo}
        aria-label={label}
      >
        <Play size={18} fill="currentColor" strokeWidth={2.4} />
        {children}
      </button>

      {isOpen && (
        <div
          className="academy-video-modal"
          role="dialog"
          aria-modal="true"
          aria-label={label}
          onClick={closeVideo}
        >
          <div
            className="academy-video-modal__dialog"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="academy-video-modal__close"
              onClick={closeVideo}
              aria-label="Close video"
            >
              <X size={22} strokeWidth={2.4} />
            </button>
            <video ref={videoRef} src={videoSrc} controls autoPlay playsInline />
          </div>
        </div>
      )}
    </>
  );
};

export default AcademyVideoButton;
