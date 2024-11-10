import React, { useState, useRef } from "react";
import { AdaptiveDpr, OrbitControls as DreiOrbitControls, PerspectiveCamera } from "@react-three/drei";
import { OrbitControls } from "three-stdlib";
import { useNavigate } from "react-router-dom";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { Color, DoubleSide, Mesh, MeshStandardMaterial, PlaneGeometry, Texture, Vector3 } from "three";
import { Button } from "react-bootstrap";
import * as THREE from "three";
import { LumaSplatsThree } from "@lumaai/luma-web";

export default function Luma() {
    const nav = useNavigate();
    const [lerpToTarget, setLerpToTarget] = useState(false);

    const handleNavigation = () => {
        console.log("Navigating to home page");
        nav("/");
    };

    const triggerLerp = () => {
        setLerpToTarget(true);
    };

    return (
        <>
            <Button style={{ position: "absolute", top: 10, left: 10 }} onClick={handleNavigation}>Back</Button>
            <Button style={{ position: "absolute", top: 50, left: 10 }} onClick={triggerLerp}>Move Camera</Button>
            <Canvas 
                gl={{
                    powerPreference: "high-performance", 
                    antialias: false, 
                    stencil: false,
                    depth: false,
                }}
                dpr={[0.5, 1]}
                style={{ height: "100vh" }}>
                <AdaptiveDpr pixelated />
                <DemoScene lerpToTarget={lerpToTarget} setLerpToTarget={setLerpToTarget} />
            </Canvas>
        </>
    );
}

interface DemoSceneProps {
    lerpToTarget: boolean;
    setLerpToTarget: React.Dispatch<React.SetStateAction<boolean>>;
}

function DemoScene({ lerpToTarget, setLerpToTarget }: DemoSceneProps) {
    const { scene, camera } = useThree();
    const controlsRef = useRef<OrbitControls | null>(null);
    const targetPosition = new Vector3(1, 1, 1);
    const lerpDuration = 1.5; // Lerp duration in seconds
    const lerpStart = useRef(0);

    useFrame(({ clock }) => {
        if (lerpToTarget) {
            if (lerpStart.current === 0) {
                lerpStart.current = clock.getElapsedTime();
                if (controlsRef.current) controlsRef.current.enabled = false; // Disable controls
            }

            const elapsed = clock.getElapsedTime() - lerpStart.current;
            const t = Math.min(elapsed / lerpDuration, 1); // Progress from 0 to 1

            // Ease-in-out for smooth acceleration and deceleration
            const easeInOut = t * t * (3 - 2 * t);

            camera.position.lerpVectors(camera.position, targetPosition, easeInOut);
            camera.lookAt(0, 0, 0);

            if (t >= 1) {
                setLerpToTarget(false); // Stop lerping
                lerpStart.current = 0; // Reset start time
                if (controlsRef.current) controlsRef.current.enabled = true; // Re-enable controls
            }
        }
    });

    // Set scene background color
    scene.background = new Color("white");

    // Initialize Luma splats
    const splats = new LumaSplatsThree({
        source: "https://lumalabs.ai/capture/4f362242-ad43-4851-9b04-88adf71f24f5",
        particleRevealEnabled: false, 
    });
    scene.add(splats);

    return (
        <>
            <PerspectiveCamera />
            <DreiOrbitControls ref={controlsRef} enableDamping makeDefault />
            <TextPlane />
        </>
    );
}

// Text plane component
function TextPlane() {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d")!;
    canvas.width = 1024;
    canvas.height = 512;

    context.fillStyle = "rgba(255, 255, 255, 0)";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "white";
    context.font = "200px sans-serif";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.strokeStyle = "rgba(0, 0, 0, 0.5)";
    context.lineWidth = 5;
    context.fillText("Hello World", canvas.width / 2, canvas.height / 2);
    context.strokeText("Hello World", canvas.width / 2, canvas.height / 2);

    const texture = new Texture(canvas);
    texture.needsUpdate = true;

    const geometry = new PlaneGeometry(5, 2.5);
    const material = new MeshStandardMaterial({
        map: texture,
        transparent: false,
        alphaTest: 0.5,
        side: DoubleSide,
        premultipliedAlpha: true,
        emissive: "white",
        emissiveIntensity: 2,
    });
    const textPlane = new Mesh(geometry, material);

    textPlane.position.set(0.8, -0.9, 0);
    textPlane.rotation.y = Math.PI / 2;
    textPlane.scale.setScalar(0.6);

    return <primitive object={textPlane} />;
}
