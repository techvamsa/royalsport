"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Play, X } from "lucide-react";

const AcademyVideoModal = ({ imageSrc, imageAlt, videoSrc, label }) => {
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
      <div className="academy-story__media academy-video-card">
        <img src={imageSrc} alt={imageAlt} />
        <button
          type="button"
          className="academy-video-card__play"
          onClick={openVideo}
          aria-label={label}
        >
          <span>
            <Play size={24} fill="currentColor" strokeWidth={2.4} />
          </span>
        </button>
      </div>

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

export default AcademyVideoModal;
