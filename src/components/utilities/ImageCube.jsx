import React, { useRef, useState, useEffect } from "react";

export default function ImageCube({
  size = 260,
  images = [], //  images come from props
  autoRotate = true,
  rotateSpeed = 0.35,
}) {
  const cubeRef = useRef(null);

  // Ensure exactly 6 images
  const fallbackImages = [
    "/my1.jpg",
    "/my2.jpg",
    "/my3.jpg",
    "/my4.jpg",
    "/my5.jpg",
    "/my6.jpg",
  ];

  const imgs = images.length === 6 ? images : fallbackImages;

  // rotation state
  const [rotation, setRotation] = useState({ x: -20, y: -20 });
  const isDragging = useRef(false);
  const lastPos = useRef({ x: 0, y: 0 });

  const cubeSize = `${size}px`;
  const half = size / 2;

  const faces = [
    { transform: `translateZ(${half}px)` }, // front
    { transform: `rotateY(180deg) translateZ(${half}px)` }, // back
    { transform: `rotateY(90deg) translateZ(${half}px)` }, // right
    { transform: `rotateY(-90deg) translateZ(${half}px)` }, // left
    { transform: `rotateX(90deg) translateZ(${half}px)` }, // top
    { transform: `rotateX(-90deg) translateZ(${half}px)` }, // bottom
  ];

  // AUTO ROTATE LOOP
  useEffect(() => {
    if (!autoRotate) return;

    let frame;
    const animate = () => {
      setRotation((r) => ({ x: r.x, y: r.y + rotateSpeed }));
      frame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(frame);
  }, [autoRotate, rotateSpeed]);

  // DRAG HANDLERS
  const startDrag = (x, y) => {
    isDragging.current = true;
    lastPos.current = { x, y };
  };

  const stopDrag = () => {
    isDragging.current = false;
  };

  const doDrag = (x, y) => {
    if (!isDragging.current) return;

    const dx = x - lastPos.current.x;
    const dy = y - lastPos.current.y;

    setRotation((r) => ({
      x: r.x - dy * 0.5,
      y: r.y + dx * 0.5,
    }));

    lastPos.current = { x, y };
  };

  return (
    <div
      className="flex items-center justify-center bg-black select-none"
      style={{ perspective: "900px" }}
      // MOUSE EVENTS
      onMouseDown={(e) => startDrag(e.clientX, e.clientY)}
      onMouseUp={stopDrag}
      onMouseLeave={stopDrag}
      onMouseMove={(e) => doDrag(e.clientX, e.clientY)}
      // TOUCH EVENTS
      onTouchStart={(e) =>
        startDrag(e.touches[0].clientX, e.touches[0].clientY)
      }
      onTouchEnd={stopDrag}
      onTouchMove={(e) => doDrag(e.touches[0].clientX, e.touches[0].clientY)}
    >
      <div
        ref={cubeRef}
        className="relative"
        style={{
          width: cubeSize,
          height: cubeSize,
          transformStyle: "preserve-3d",
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: isDragging.current ? "none" : "transform 0.08s linear",
        }}
      >
        {faces.map((face, i) => (
          <div
            key={i}
            className="absolute inset-0 bg-gray-900/20 border border-white/10 shadow-xl rounded-md overflow-hidden"
            style={{
              width: cubeSize,
              height: cubeSize,
              transform: face.transform,
              backfaceVisibility: "hidden",
            }}
          >
            <img
              src={imgs[i]}
              alt="cube-face"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
