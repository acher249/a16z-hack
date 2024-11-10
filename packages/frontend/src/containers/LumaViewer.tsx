// import React, { useState, useRef } from "react";
// import { AdaptiveDpr, OrbitControls as DreiOrbitControls, PerspectiveCamera } from "@react-three/drei";
// import { useNavigate } from "react-router-dom";
// import { Canvas, useThree, useFrame } from "@react-three/fiber";
// import { Color, Vector3, Quaternion } from "three";
// import { Button } from "react-bootstrap";
// import { LumaSplatsThree } from "@lumaai/luma-web";
// import * as THREE from "three";
// import { API } from "aws-amplify";
// import { Conversation } from '@11labs/client';
// import { Mic, MicOff } from 'lucide-react';

// export default function Luma() {
//     const nav = useNavigate();
//     const [lerpToTarget, setLerpToTarget] = useState(false);
//     const [showIframe, setShowIframe] = useState(false);
//     const [showToggleButton, setShowToggleButton] = useState(false); // State for toggle button visibility
//     const [conversation, setConversation] = useState<any>(null);
//     const [isConnected, setIsConnected] = useState(false);
//     const [conversationMode, setConversationMode] = useState<'speaking' | 'listening' | 'processing' | 'silent'>('silent');

//     const handleNavigation = () => {
//         console.log("Navigating to home page");
//         nav("/");
//     };

//     const triggerLerp = () => {
//         setLerpToTarget(true);
//     };

//     const requestMicrophonePermission = async () => {
//         try {
//             await navigator.mediaDevices.getUserMedia({ audio: true });
//             return true;
//         } catch (error) {
//             console.error('Microphone permission denied:', error);
//             return false;
//         }
//     };

//     const getSignedUrl = async () => {
//         try {
//             const response = await API.get("notes", "/signed-url", {});
//             const data = JSON.parse(response.body);
//             return data.signedUrl;
//         } catch (error) {
//             console.error('Error getting signed URL:', error);
//             throw error;
//         }
//     };

//     const startConversation = async () => {
//         try {
//             const hasPermission = await requestMicrophonePermission();
//             if (!hasPermission) {
//                 alert('Microphone permission is required for the conversation.');
//                 return;
//             }

//             const signedUrl = await getSignedUrl();
            
//             const newConversation = await Conversation.startSession({
//                 signedUrl: signedUrl,
//                 onConnect: () => {
//                     console.log('Connected');
//                     setIsConnected(true);
//                     setConversationMode('listening');
//                 },
//                 onDisconnect: () => {
//                     console.log('Disconnected');
//                     setIsConnected(false);
//                     setConversationMode('silent');
//                 },
//                 onError: (error) => {
//                     console.error('Conversation error:', error);
//                 },
//                 onModeChange: (mode) => {
//                     console.log('Mode changed:', mode);
//                     setConversationMode(mode.mode);
//                 }
//             });

//             setConversation(newConversation);
//         } catch (error) {
//             console.error('Error starting conversation:', error);
//         }
//     };

//     const endConversation = async () => {
//         if (conversation) {
//             await conversation.endSession();
//             setConversation(null);
//         }
//     };

//     const toggleConversation = async () => {
//         if (isConnected) {
//             await endConversation();
//         } else {
//             await startConversation();
//         }
//     };

//     return (
//         <div style={{ position: "relative", width: "100%", height: "100vh" }}>
//             <Button style={{ position: "absolute", top: 10, left: 10, zIndex: 2 }} onClick={handleNavigation}>Back</Button>
//             <Button style={{ position: "absolute", top: 50, left: 10, zIndex: 2 }} onClick={triggerLerp}>Move Camera</Button>

//             <Canvas 
//                 gl={{
//                     powerPreference: "high-performance", 
//                     antialias: false, 
//                     stencil: false,
//                     depth: false,
//                 }}
//                 dpr={[0.1, .8]}
//                 style={{ height: "88vh"}}
//             >
//                 <AdaptiveDpr pixelated />
//                 <DemoScene 
//                     lerpToTarget={lerpToTarget} 
//                     setLerpToTarget={setLerpToTarget} 
//                     onLerpComplete={() => {
//                         setShowIframe(true);
//                         setShowToggleButton(false); // Hide toggle button when video starts
//                         setTimeout(() => {
//                             setShowIframe(false);
//                             setShowToggleButton(true); // Show toggle button after video ends
//                         }, 8000); // Hide iframe after 4 seconds
//                     }} 
//                 />
//             </Canvas>

//             {showIframe && (
//                 <div style={{
//                     position: "absolute",
//                     top: 0,
//                     left: 0,
//                     width: "100%",
//                     height: "100%",
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     zIndex: 1,
//                 }}>
//                     <video
//                         src="/result.mp4"
//                         autoPlay
//                         // muted
//                         // loop
//                         playsInline
//                         style={{
//                             position: "absolute",
//                             top: "46%",
//                             left: "50%",
//                             transform: "translate(-50%, -50%)",
//                             width: "940px",
//                             height: "620px",
//                             zIndex: 1,
//                             objectFit: "cover",
//                         }}
//                     />
//                 </div>
//             )}

//             {/* Show toggle button only after the video has turned off */}
//             {showToggleButton && (
//                 <Button
//                     onClick={toggleConversation}
//                     variant={isConnected ? "danger" : "primary"}
//                     style={{
//                         position: "absolute",
//                         top: "10px",
//                         right: "10px",
//                         zIndex: 3,
//                         display: "flex",
//                         alignItems: "center",
//                         gap: "8px",
//                         padding: "8px 16px",
//                         borderRadius: "20px",
//                         boxShadow: "0 2px 4px rgba(0,0,0,0.2)"
//                     }}
//                 >
//                     {isConnected ? <MicOff size={20} /> : <Mic size={20} />}
//                     {isConnected ? "Stop Conversation" : "Start Conversation"}
//                 </Button>
//             )}
//         </div>
//     );
// }

// interface DemoSceneProps {
//     lerpToTarget: boolean;
//     setLerpToTarget: React.Dispatch<React.SetStateAction<boolean>>;
//     onLerpComplete: () => void;
// }

// function DemoScene({ lerpToTarget, setLerpToTarget, onLerpComplete }: DemoSceneProps) {
//     const { scene, camera } = useThree();
//     const controlsRef = useRef(null);
//     const targetPosition = new Vector3(-0.366, 0.210, 3.124);
//     const targetQuaternion = new THREE.Quaternion().setFromEuler(new THREE.Euler(-0.117, -0.082, -0.009));
//     const lerpDuration = 2.5; // Increased duration for smoothness
//     const startPosition = useRef(new Vector3());
//     const startQuaternion = useRef(new Quaternion());
//     const lerpStart = useRef(0);

//     // Quintic easing function for smoother transitions
//     const easeQuintic = (t: number) => t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2;

//     useFrame(({ clock }) => {
//         if (lerpToTarget) {
//             if (lerpStart.current === 0) {
//                 startPosition.current.copy(camera.position);
//                 startQuaternion.current.copy(camera.quaternion);
//                 lerpStart.current = clock.getElapsedTime();
//             }

//             const elapsed = clock.getElapsedTime() - lerpStart.current;
//             const t = Math.min(elapsed / lerpDuration, 1);
//             const easeT = easeQuintic(t); // Apply quintic easing for smoothness

//             // Smoothly interpolate position
//             camera.position.lerpVectors(startPosition.current, targetPosition, easeT);
//             // Smoothly interpolate rotation
//             camera.quaternion.slerp(targetQuaternion, easeT);

//             if (t >= 1) {
//                 setLerpToTarget(false);
//                 lerpStart.current = 0;
//                 camera.position.copy(targetPosition);
//                 camera.quaternion.copy(targetQuaternion);
                
//                 onLerpComplete();
//             }
//         }
//     });

//     scene.background = new Color("white");

//     const splats = new LumaSplatsThree({
//         source: "https://lumalabs.ai/capture/f25ed19b-225c-4ec7-9101-d71d8625065e",
//         particleRevealEnabled: false, 
//     });
//     scene.add(splats);

//     return (
//         <>
//             <PerspectiveCamera />
//             <DreiOrbitControls 
//                 ref={controlsRef} 
//                 zoomSpeed={0.1}
//                 enableDamping 
//                 makeDefault />
//         </>
//     );
// }


import React, { useState, useRef } from "react";
import { AdaptiveDpr, OrbitControls as DreiOrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { Color, Vector3, Quaternion } from "three";
import { Button } from "react-bootstrap";
import { LumaSplatsThree } from "@lumaai/luma-web";
import * as THREE from "three";
import { API } from "aws-amplify";
import { Conversation } from '@11labs/client';
import { Mic, MicOff } from 'lucide-react';

export default function Luma() {
    const nav = useNavigate();
    const [lerpToTarget, setLerpToTarget] = useState(false);
    const [showIframe, setShowIframe] = useState(false);
    const [showToggleButton, setShowToggleButton] = useState(false); // State for toggle button visibility
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

    // Unload video resources from memory
    const handleVideoEnded = (videoRef: HTMLVideoElement) => {
        videoRef.src = ""; // Clear video source
        setShowIframe(false); // Hide the iframe after the video ends
        setShowToggleButton(true); // Show toggle button
    };

    return (
        <div style={{ position: "relative", width: "100%", height: "100vh" }}>
            <Button style={{ position: "absolute", top: 10, left: 10, zIndex: 2 }} onClick={handleNavigation}>back</Button>
            <Button style={{ position: "absolute", top: 60, left: 10, zIndex: 2 }} onClick={triggerLerp}>Let Lucious Say Hello</Button>
            <Canvas 
                gl={{
                    powerPreference: "high-performance", 
                    antialias: false, 
                    stencil: false,
                    depth: false,
                }}
                dpr={[0.2, .9]}
                style={{ height: "88vh"}}
            >
                <AdaptiveDpr pixelated />
                <DemoScene 
                    lerpToTarget={lerpToTarget} 
                    setLerpToTarget={setLerpToTarget} 
                    onLerpComplete={() => {
                        setShowIframe(true);
                        setShowToggleButton(false); // Hide toggle button when video starts
                    }} 
                />
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
                    zIndex: 1,
                }}>
                    <video
                        src="/result.mp4"
                        autoPlay
                        muted
                        loop={false} // Only play once
                        playsInline
                        onEnded={(e) => handleVideoEnded(e.currentTarget)}
                        style={{
                            position: "absolute",
                            top: "46%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: "940px",
                            height: "620px",
                            zIndex: 1,
                            objectFit: "cover",
                        }}
                    />
                </div>
            )}

            {/* Show toggle button only after the video has turned off */}
            {showToggleButton && (
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
    const targetPosition = new Vector3(-0.366, 0.210, 3.124);
    const targetQuaternion = new THREE.Quaternion().setFromEuler(new THREE.Euler(-0.117, -0.082, -0.009));
    const lerpDuration = 2.5; // Increased duration for smoothness
    const startPosition = useRef(new Vector3());
    const startQuaternion = useRef(new Quaternion());
    const lerpStart = useRef(0);

    // Quintic easing function for smoother transitions
    const easeQuintic = (t: number) => t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2;

    useFrame(({ clock }) => {
        if (lerpToTarget) {
            if (lerpStart.current === 0) {
                startPosition.current.copy(camera.position);
                startQuaternion.current.copy(camera.quaternion);
                lerpStart.current = clock.getElapsedTime();
            }

            const elapsed = clock.getElapsedTime() - lerpStart.current;
            const t = Math.min(elapsed / lerpDuration, 1);
            const easeT = easeQuintic(t); // Apply quintic easing for smoothness

            // Smoothly interpolate position
            camera.position.lerpVectors(startPosition.current, targetPosition, easeT);
            // Smoothly interpolate rotation
            camera.quaternion.slerp(targetQuaternion, easeT);

            if (t >= 1) {
                setLerpToTarget(false);
                lerpStart.current = 0;
                camera.position.copy(targetPosition);
                camera.quaternion.copy(targetQuaternion);
                
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
            <DreiOrbitControls 
                ref={controlsRef} 
                zoomSpeed={0.1}
                enableDamping 
                makeDefault />
        </>
    );
}

