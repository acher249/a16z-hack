import React, { useState, useRef, useEffect } from "react";
import { AdaptiveDpr, OrbitControls as DreiOrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { Color, Vector3 } from "three";
import { Button } from "react-bootstrap";
import { LumaSplatsThree } from "@lumaai/luma-web";
import { API } from "aws-amplify";
import { Conversation } from '@11labs/client';
import { Mic, MicOff } from 'lucide-react';

export default function LumaViewer() {
    const nav = useNavigate();
    const [lerpToTarget, setLerpToTarget] = useState(false);
    const [showIframe, setShowIframe] = useState(false);
    const [conversation, setConversation] = useState<any>(null);
    const [isConnected, setIsConnected] = useState(false);
    const [conversationMode, setConversationMode] = useState<'speaking' | 'listening' | 'processing' | 'silent'>('silent');

    const handleNavigation = () => {
        console.log("Navigating to home page");
        nav("/");
    };

    const triggerLerp = () => {
        setLerpToTarget(true);
    };

    const requestMicrophonePermission = async () => {
        try {
            await navigator.mediaDevices.getUserMedia({ audio: true });
            return true;
        } catch (error) {
            console.error('Microphone permission denied:', error);
            return false;
        }
    };

    const getSignedUrl = async () => {
        try {
            const response = await API.get("notes", "/signed-url", {});
            const data = JSON.parse(response.body);
            return data.signedUrl;
        } catch (error) {
            console.error('Error getting signed URL:', error);
            throw error;
        }
    };

    const startConversation = async () => {
        try {
            const hasPermission = await requestMicrophonePermission();
            if (!hasPermission) {
                alert('Microphone permission is required for the conversation.');
                return;
            }

            const signedUrl = await getSignedUrl();
            
            const newConversation = await Conversation.startSession({
                signedUrl: signedUrl,
                onConnect: () => {
                    console.log('Connected');
                    setIsConnected(true);
                    setConversationMode('listening');
                },
                onDisconnect: () => {
                    console.log('Disconnected');
                    setIsConnected(false);
                    setConversationMode('silent');
                },
                onError: (error) => {
                    console.error('Conversation error:', error);
                },
                onModeChange: (mode) => {
                    console.log('Mode changed:', mode);
                    setConversationMode(mode.mode);
                }
            });

            setConversation(newConversation);
        } catch (error) {
            console.error('Error starting conversation:', error);
        }
    };

    const endConversation = async () => {
        if (conversation) {
            await conversation.endSession();
            setConversation(null);
        }
    };

    const toggleConversation = async () => {
        if (isConnected) {
            await endConversation();
        } else {
            await startConversation();
        }
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

            {showIframe && (
                <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    zIndex: 1,
                }}>
                    {/* Conversation Toggle Button */}
                    <Button
                        onClick={toggleConversation}
                        variant={isConnected ? "danger" : "primary"}
                        style={{
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            zIndex: 3,
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            padding: "8px 16px",
                            borderRadius: "20px",
                            boxShadow: "0 2px 4px rgba(0,0,0,0.2)"
                        }}
                    >
                        {isConnected ? <MicOff size={20} /> : <Mic size={20} />}
                        {isConnected ? "Stop Conversation" : "Start Conversation"}
                    </Button>

                    {/* Modal showing conversation mode when active */}
                    {isConnected && (
                        <div style={{
                            position: "absolute",
                            top: "60px",
                            right: "10px",
                            background: "white",
                            padding: "8px 16px",
                            borderRadius: "8px",
                            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                            zIndex: 3
                        }}>
                            {conversationMode.charAt(0).toUpperCase() + conversationMode.slice(1)}
                        </div>
                    )}

                    {/* Video iframe */}
                    <iframe
                        title="Video Overlay"
                        src="/result.mp4"
                        style={{
                            width: "640px",
                            height: "360px",
                            border: "none",
                        }}
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    />
                </div>
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
                onLerpComplete();
            }
        }
    });

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