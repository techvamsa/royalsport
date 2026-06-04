"use client";

import { useRef, useState } from "react";
import { Search } from "lucide-react";

const ZOOM_LEVEL = 2.35;
const DEFAULT_LENS_SIZE = 172;

export default function ProductImageMagnifier({ src, alt }) {
  const frameRef = useRef(null);
  const imageRef = useRef(null);
  const lensRef = useRef(null);
  const [lens, setLens] = useState({
    active: false,
    x: 0,
    y: 0,
    backgroundPosition: "50% 50%",
    backgroundSize: "auto",
  });

  const handlePointerMove = (event) => {
    const frame = frameRef.current;
    const image = imageRef.current;

    if (!frame || !image) {
      return;
    }

    const frameRect = frame.getBoundingClientRect();
    const imageRect = image.getBoundingClientRect();
    const lensSize = lensRef.current?.offsetWidth || DEFAULT_LENS_SIZE;
    const isInsideImage =
      event.clientX >= imageRect.left &&
      event.clientX <= imageRect.right &&
      event.clientY >= imageRect.top &&
      event.clientY <= imageRect.bottom;

    if (!isInsideImage || imageRect.width === 0 || imageRect.height === 0) {
      setLens((current) => ({ ...current, active: false }));
      return;
    }

    const imageX = event.clientX - imageRect.left;
    const imageY = event.clientY - imageRect.top;

    setLens({
      active: true,
      x: event.clientX - frameRect.left,
      y: event.clientY - frameRect.top,
      backgroundPosition: `${lensSize / 2 - imageX * ZOOM_LEVEL}px ${
        lensSize / 2 - imageY * ZOOM_LEVEL
      }px`,
      backgroundSize: `${imageRect.width * ZOOM_LEVEL}px ${
        imageRect.height * ZOOM_LEVEL
      }px`,
    });
  };

  const hideLens = () => {
    setLens((current) => ({ ...current, active: false }));
  };

  return (
    <div
      className={`product-magnifier${
        lens.active ? " product-magnifier--active" : ""
      }`}
      ref={frameRef}
      onPointerDown={handlePointerMove}
      onPointerEnter={handlePointerMove}
      onPointerLeave={hideLens}
      onPointerMove={handlePointerMove}
    >
      <img
        ref={imageRef}
        className="product-magnifier__image"
        src={src}
        alt={alt}
        draggable={false}
      />

      <span className="product-magnifier__hint" aria-hidden="true">
        <Search size={21} strokeWidth={2.7} />
      </span>

      <span
        ref={lensRef}
        className="product-magnifier__lens"
        aria-hidden="true"
        style={{
          backgroundImage: `url(${JSON.stringify(src)})`,
          backgroundPosition: lens.backgroundPosition,
          backgroundSize: lens.backgroundSize,
          left: `${lens.x}px`,
          top: `${lens.y}px`,
        }}
      />
    </div>
  );
}
