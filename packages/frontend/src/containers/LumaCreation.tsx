import React, { useState, useEffect, useRef } from "react";
import { AdaptiveDpr, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { API } from "aws-amplify";
import { NoteType } from "../types/note";
import { onError } from "../lib/errorLib";
import { useAppContext } from "../lib/contextLib";
import { Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import GUI from 'lil-gui';
import { useNavigate } from "react-router-dom";
// import "./Home.css";
// import { WebGLRenderer, PerspectiveCamera, Scene } from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { OrbitControls as OrbitControlsStdLib } from 'three-stdlib';
import { Canvas, useThree } from '@react-three/fiber';
import { LumaSplatsThree } from '@lumaai/luma-web';
import { Camera, CineonToneMapping, Scene, WebGLRenderer } from 'three';
import { Color, DoubleSide, Mesh, MeshStandardMaterial, PlaneGeometry, Texture, Vector3 } from "three";

export default function LumaCreation() {
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

		nav("/");
	}

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
		<h3 style={{marginTop: '-28px', marginBottom: '36px', fontFamily:'Arial'}}>Create Interactive Artifact</h3>
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

}