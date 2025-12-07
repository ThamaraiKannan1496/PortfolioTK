import React, { useRef, useState, useEffect } from "react";

export default function ImageCube({
  size = 260,
  autoRotate = true,
  rotateSpeed = 0.3,
}) {
  const cubeRef = useRef(null);

  // Load 6 images from public folder
  const images = [
    "/my1.jpg", // front
    "/my2.jpg", // back
    "/my3.jpg", // right
    "/my4.jpg", // left
    "/my5.jpg", // top
    "/my6.jpg", // bottom
  ];

  // rotation state
  const [rotation, setRotation] = useState({ x: -20, y: -20 });
  const isDragging = useRef(false);
  const lastPos = useRef({ x: 0, y: 0 });

  const cubeSize = `${size}px`;
  const half = size / 2;

  const faces = [
    { name: "front", transform: `translateZ(${half}px)` },
    { name: "back", transform: `rotateY(180deg) translateZ(${half}px)` },
    { name: "right", transform: `rotateY(90deg) translateZ(${half}px)` },
    { name: "left", transform: `rotateY(-90deg) translateZ(${half}px)` },
    { name: "top", transform: `rotateX(90deg) translateZ(${half}px)` },
    { name: "bottom", transform: `rotateX(-90deg) translateZ(${half}px)` },
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
  const onMouseDown = (e) => {
    isDragging.current = true;
    lastPos.current = { x: e.clientX, y: e.clientY };
  };

  const onMouseUp = () => {
    isDragging.current = false;
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;

    const dx = e.clientX - lastPos.current.x;
    const dy = e.clientY - lastPos.current.y;

    setRotation((r) => ({
      x: r.x - dy * 0.5,
      y: r.y + dx * 0.5,
    }));

    lastPos.current = { x: e.clientX, y: e.clientY };
  };

  return (
    <div
      className="flex items-center justify-center  bg-black select-none"
      style={{
        perspective: "900px",
      }}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onMouseMove={onMouseMove}
    >
      <div
        ref={cubeRef}
        className="relative"
        style={{
          width: cubeSize,
          height: cubeSize,
          transformStyle: "preserve-3d",
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: "transform 0.08s linear",
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
              src={images[i]}
              alt={face.name}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
