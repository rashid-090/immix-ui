import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";

export default function Globe() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const globeRef = useRef(null);
  const animationRef = useRef(null);

  const phiRef = useRef(0);
  const thetaRef = useRef(0.3);
  const isDraggingRef = useRef(false);
  const lastMousePos = useRef({ x: 0, y: 0 });

 const markers = [
    { id: "usa", location: [38.9, -77.04], name: "USA" },
    { id: "brazil", location: [-15.79, -47.88], name: "BRAZIL" },
    { id: "argentina", location: [-34.6, -58.38], name: "ARGENTINA" },
    { id: "portugal", location: [38.72, -9.13], name: "PORTUGAL" },
    { id: "united-kingdom", location: [55.51, -5.13], name: "UNITED KINGDOM" },
    { id: "france", location: [50.85, 10.35], name: "FRANCE" },
    { id: "northland", location: [-35.41, 173.93], name: "NORTHLAND" },
    { id: "sweden", location: [59.33, 30.07], name: "SWEDEN" },
    { id: "lithuania", location: [44.69, 25.28], name: "LITHUANIA" },
    { id: "italy", location: [35.9, 12.5], name: "ITALY" },
    { id: "egypt", location: [30.04, 31.24], name: "EGYPT" },
    { id: "middle-east", location: [28.8, 52.0], name: "MIDDLE EAST" },
    { id: "saudi-arabia", location: [18.71, 46.67], name: "SAUDI ARABIA" },
    { id: "india", location: [20.61, 77.23], name: "INDIA" },
    { id: "thailand", location: [20.75, 100.5], name: "THAILAND" },
    { id: "malaysia", location: [10.14, 99.69], name: "MALAYSIA" },
    { id: "russia", location: [52.75, 47.61], name: "RUSSIA" },
    { id: "japan", location: [35.67, 139.65], name: "JAPAN" },
    { id: "singapore", location: [4.29, 110.85], name: "SINGAPORE" },
    { id: "indonesia", location: [-6.17, 106.83], name: "INDONESIA" },
    { id: "australia", location: [-35.28, 149.13], name: "AUSTRALIA" },
  ];

  const arcs = [
    // Transatlantic (Americas ↔ Europe)
    { from: [38.9, -77.04], to: [55.51, -5.13] }, // USA → UK
    { from: [38.9, -77.04], to: [50.85, 10.35] }, // USA → France
    { from: [-15.79, -47.88], to: [38.72, -9.13] }, // Brazil → Portugal
    { from: [-34.6, -58.38], to: [35.9, 12.5] }, // Argentina → Italy

    // Europe → Asia/Middle East
    { from: [55.51, -5.13], to: [52.75, 47.61] }, // UK → Russia
    { from: [50.85, 10.35], to: [30.04, 31.24] }, // France → Egypt
    { from: [59.33, 30.07], to: [28.8, 52.0] }, // Sweden → Middle East
    { from: [44.69, 25.28], to: [20.61, 77.23] }, // Lithuania → India

    // Middle East → Asia
    { from: [28.8, 52.0], to: [20.61, 77.23] }, // Middle East → India
    { from: [18.71, 46.67], to: [20.75, 100.5] }, // Saudi Arabia → Thailand
    { from: [30.04, 31.24], to: [35.67, 139.65] }, // Egypt → Japan

    // Asia internal + Australia
    { from: [20.61, 77.23], to: [35.67, 139.65] }, // India → Japan
    { from: [35.67, 139.65], to: [-35.28, 149.13] }, // Japan → Australia (your original)
    { from: [4.29, 110.85], to: [-35.28, 149.13] }, // Singapore → Australia
    { from: [-6.17, 106.83], to: [-35.41, 173.93] }, // Indonesia → Northland
    { from: [20.75, 100.5], to: [10.14, 99.69] }, // Thailand → Malaysia

    // Americas ↔ Asia/Pacific
    { from: [38.9, -77.04], to: [35.67, 139.65] }, // USA → Japan
    { from: [-15.79, -47.88], to: [-35.28, 149.13] }, // Brazil → Australia

    // Cross-continental loops
    { from: [-35.28, 149.13], to: [38.9, -77.04] }, // Australia → USA (closes Pacific loop)
  ];

  
  // Flag: is the globe visible in viewport?
  const isVisible = useRef(true);

  useEffect(() => {
    if (!containerRef.current) return;

    const canvas = canvasRef.current;

    const resizeGlobe = () => {
      const width = containerRef.current.clientWidth;

      if (globeRef.current) globeRef.current.destroy();

      globeRef.current = createGlobe(canvas, {
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        width: width * 2,
        height: width * 2,
        phi: phiRef.current,
        theta: thetaRef.current,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 30000,
        mapBrightness: 15,
        baseColor: [0.1, 0.1, 0.1],
        markerColor: [0.3784, 0.3725, 1],
        glowColor: [1, 1, 1],
        markers: markers.map((m) => ({
          id: m.id,
          location: m.location,
          size: 0.04,
        })),
        arcs,
        arcColor: [0.2588, 0.1412, 1],
        arcWidth: 0.3,
      });
    };

    resizeGlobe();

    // Only animate if in viewport or dragging
    const animate = () => {
      if (!globeRef.current) return;

      if (isVisible.current || isDraggingRef.current) {
        if (!isDraggingRef.current) {
          phiRef.current += 0.002;
        }

        globeRef.current.update({
          phi: phiRef.current,
          theta: thetaRef.current,
        });
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const observer = new IntersectionObserver(
      (entries) => {
        isVisible.current = entries[0].isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(containerRef.current);

    window.addEventListener("resize", resizeGlobe);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resizeGlobe);
      globeRef.current?.destroy();
      observer.disconnect();
    };
  }, []);

  const stopDragging = () => {
    isDraggingRef.current = false;
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[700px] aspect-square mx-auto cursor-grab active:cursor-grabbing select-none"
      onMouseDown={(e) => {
        isDraggingRef.current = true;
        lastMousePos.current = { x: e.clientX, y: e.clientY };
      }}
      onMouseMove={(e) => {
        if (!isDraggingRef.current) return;

        phiRef.current += (e.clientX - lastMousePos.current.x) * 0.005;
        thetaRef.current += (e.clientY - lastMousePos.current.y) * 0.005;
        thetaRef.current = Math.max(-0.8, Math.min(0.8, thetaRef.current));
        lastMousePos.current = { x: e.clientX, y: e.clientY };
      }}
      onMouseUp={stopDragging}
      onMouseLeave={stopDragging}
    >
      <canvas ref={canvasRef} className="w-full h-full" />

      {markers.map((marker) => (
        <div
          key={marker.id}
          className="absolute will-change-transform pointer-events-auto z-10 hover:z-50 group transition-transform duration-200 hover:scale-125"
          style={{
            positionAnchor: `--cobe-${marker.id}`,
            left: "anchor(center)",
            bottom: "anchor(top)",
            translate: "-50% 0",
            marginBottom: "0px",
            opacity: `var(--cobe-visible-${marker.id}, 0)`,
            transition: "opacity 0.3s ease, transform 0.2s ease",
          }}
        >
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center justify-center px-2 py-.5 bg-orange-600 hover:bg-[rgb(73,70,250)] border border-white/20 rounded shadow-xl backdrop-blur-sm transition-colors duration-200">
              <span className="text-white font-DMmono text-[9px] text-nowrap font-normal tracking-widest">
                {marker.name.toUpperCase()}
              </span>
            </div>
            <div className="w-px h-5 bg-white/40" />
            <div className="w-1.5 h-1.5 bg-[#5F5EFD]  rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
}