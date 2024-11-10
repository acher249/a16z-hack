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
	let globalGUI: GUI | null = null;
	const nav = useNavigate();

	const [audioUrl, setAudioUrl] = useState('');
	const [imageUrl, setImageUrl] = useState('');

	  const handleSubmit = async () => {
		console.log('Submitted content:', {
		  audioUrl: audioUrl,
		  imageUrl: imageUrl
		});

		try {
			const data = await API.post("notes", "/generate-video", {
				body: { 
					imageUrl: imageUrl,
					audioUrl: audioUrl
				 },
			  });

			console.log('Response from Luma:', data);
		  } catch (error) {
			console.error('Error generating video:', error);
		  }
	  };
 
	const click = () => {
		console.log("click click");
    const nav = useNavigate();
    const [lerpToTarget, setLerpToTarget] = useState(false);

    const handleNavigation = () => {
        console.log("Navigating to home page");
        nav("/");
    };

	function DemoScene (){
		// expanded: boolean,
		// demoBasicFn: DemoFn | null,
		// demoReactFn: React.FC<{ gui: GUI }> | null,
		// onExpandToggle: (expanded: boolean) => void,

		//   let { renderer, camera, scene, gui } = props;
		let { scene, gl: renderer, camera } = useThree();
		let [gui, setGUI] = useState<GUI | null>(globalGUI);
		let [autoRotate, setAutoRotate] = useState(true);
		let [showUI, setShowUI] = useState(true);
		let controlsRef = useRef<OrbitControlsStdLib | null>(null);

		scene.background = new Color('white');

		let splats = new LumaSplatsThree({
			// MIT WPU Globe @krazyykrunal
			source: 'https://lumalabs.ai/capture/f25ed19b-225c-4ec7-9101-d71d8625065e',
			// we disable full three.js for performance
			enableThreeShaderIntegration: false,
			// particle entrance animation
			particleRevealEnabled: true,
		});
	  
		scene.add(splats);
	  
		// the splats file can provide an ideal initial viewing location
		splats.onInitialCameraTransform = transform => {
			transform.decompose(camera.position, camera.quaternion, new Vector3());
		};
	  
		scene.add(createText());

		return <>
			<PerspectiveCamera />
			<OrbitControls
				ref={controlsRef}
				autoRotate={autoRotate}
				autoRotateSpeed={0.5}
				enableDamping={true}
				// disable auto rotation when user interacts
				onStart={() => {
					setAutoRotate(false);
				}}
				makeDefault
			/>
			{/* {props.demoReactFn && gui && <props.demoReactFn gui={gui} />} */}
		</>
	}





  return (
	<>
		<Button style={{marginTop: '-110px', marginLeft:'-80px'}} onClick={click}>Back</Button>
		<Canvas
			gl={{
				antialias: false,
				toneMapping: CineonToneMapping,
			}}
			key={"1"}
			style={{
				minWidth: '10px',
				height: '100vh',
				marginTop: '-28px'
			}}
			onPointerDown={(e) => {
				// prevent text selection
				e.preventDefault();
			}}
		>
			<AdaptiveDpr pixelated />
			<DemoScene />
		</Canvas>

		<div className="space-y-6 mt-8">
        {/* Image URL Section */}
        <div className="rounded-lg border border-gray-300 p-6">
          <div className="flex flex-col">
            <label htmlFor="image-url" className="block text-sm font-medium text-gray-900 mb-2">
              Image URL
            </label>
            <input
              id="image-url"
              type="url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Enter image URL (e.g., https://example.com/image.jpg)"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Audio URL Section */}
        <div className="rounded-lg border border-gray-300 p-6">
          <div className="flex flex-col">
            <label htmlFor="video-url" className="block text-sm font-medium text-gray-900 mb-2">
              Audio URL
            </label>
            <input
              id="video-url"
              type="url"
              value={audioUrl}
              onChange={(e) => setAudioUrl(e.target.value)}
              placeholder="Enter video URL (e.g., https://example.com/video.mp4)"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 hover:bg-blue-600 text-black font-medium py-2 px-4 rounded-lg transition-colors"
          disabled={!audioUrl && !imageUrl && !imageUrl}
        >
          Submit Content
        </button>
      </div>
	</>

  )
    //   dispose: () => {
    //       // stop worker, free resources
    //       splats.dispose();
    //   }

	//   return (
	//     <div className="Home">
	//       <Button onClick={click}>Back</Button>
	//       <p>Luma Here</p>

	//     </div>
	//   );
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
