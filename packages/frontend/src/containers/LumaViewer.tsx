import React, { useState, useRef, useEffect } from "react";
import { AdaptiveDpr, OrbitControls as DreiOrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { Color, Vector3 } from "three";
import { Button } from "react-bootstrap";
import { LumaSplatsThree } from "@lumaai/luma-web";

export default function LumaViewer() {
    const nav = useNavigate();
    const [lerpToTarget, setLerpToTarget] = useState(false);
    const [showIframe, setShowIframe] = useState(false);

    const handleNavigation = () => {
        console.log("Navigating to home page");
        nav("/");
    };

    const triggerLerp = () => {
        setLerpToTarget(true);
    };

    return (
        <div style={{ position: "relative", width: "100%", height: "100vh" }}>
            <Button style={{ position: "absolute", top: 10, left: 10, zIndex: 2 }} onClick={handleNavigation}>Back</Button>
            <Button style={{ position: "absolute", top: 50, left: 10, zIndex: 2 }} onClick={triggerLerp}>Move Camera</Button>

            <Canvas 
                gl={{
                    powerPreference: "high-performance", 
                    antialias: false, 
                    stencil: false,
                    depth: false,
                }}
                dpr={[0.5, 1]}
                style={{ height: "100vh" }}
            >
                <AdaptiveDpr pixelated />
                <DemoScene lerpToTarget={lerpToTarget} setLerpToTarget={setLerpToTarget} onLerpComplete={() => setShowIframe(true)} />
            </Canvas>

            {/* The iframe overlay, displayed based on showIframe state */}
            {showIframe && (
                <iframe
                    title="Video Overlay"
                    src="/result.mp4"
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "640px",
                        height: "360px",
                        zIndex: 1,
                        pointerEvents: "auto",
                    }}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                />
            )}
        </div>
    );
}

interface DemoSceneProps {
    lerpToTarget: boolean;
    setLerpToTarget: React.Dispatch<React.SetStateAction<boolean>>;
    onLerpComplete: () => void;
}

function DemoScene({ lerpToTarget, setLerpToTarget, onLerpComplete }: DemoSceneProps) {
    const { scene, camera } = useThree();
    const controlsRef = useRef(null);
    const targetPosition = new Vector3(1, 1, 1);
    const lerpDuration = 1.5;
    const startPosition = useRef(new Vector3());
    const lerpStart = useRef(0);

    useFrame(({ clock }) => {
        if (lerpToTarget) {
            if (lerpStart.current === 0) {
                startPosition.current.copy(camera.position);
                lerpStart.current = clock.getElapsedTime();
                // Disable controls during lerp (optional)
                // if (controlsRef.current) controlsRef.current.enabled = false;
            }

            const elapsed = clock.getElapsedTime() - lerpStart.current;
            const t = Math.min(elapsed / lerpDuration, 1);
            const easeInOut = t * t * (3 - 2 * t);

            camera.position.lerpVectors(startPosition.current, targetPosition, easeInOut);
            camera.lookAt(0, 0, 0);

            if (t >= 1) {
                setLerpToTarget(false);
                lerpStart.current = 0;
                camera.position.copy(targetPosition);
                // if (controlsRef.current) controlsRef.current.enabled = true;

                // Trigger the onLerpComplete callback
                onLerpComplete();
            }
        }
    });

    useEffect(() => {
        // Hide the iframe 4 seconds after it’s shown
        if (lerpToTarget === false) {
            const timer = setTimeout(() => setShowIframe(false), 4000);
            return () => clearTimeout(timer); // Cleanup on component unmount or if lerpToTarget changes
        }
    }, [lerpToTarget]);

    scene.background = new Color("white");

    const splats = new LumaSplatsThree({
        source: "https://lumalabs.ai/capture/f25ed19b-225c-4ec7-9101-d71d8625065e",
        particleRevealEnabled: false, 
    });
    scene.add(splats);

    return (
        <>
            <PerspectiveCamera />
            <DreiOrbitControls ref={controlsRef} enableDamping makeDefault />
        </>
    );
}
