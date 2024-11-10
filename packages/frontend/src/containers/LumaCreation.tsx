import React, { useState, useEffect, useRef } from "react";
import { AdaptiveDpr, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { API } from "aws-amplify";
import { NoteType } from "../types/note";
import { onError } from "../lib/errorLib";
import { useAppContext } from "../lib/contextLib";
import Nav from "react-bootstrap/Nav";
import GUI from 'lil-gui';
import { useNavigate } from "react-router-dom";
import { OrbitControls as OrbitControlsStdLib } from 'three-stdlib';
import { Canvas, useThree } from '@react-three/fiber';
import { LumaSplatsThree } from '@lumaai/luma-web';
import { Color, Vector3 } from "three";
import { Button, Row, Col, Form, Dropdown } from "react-bootstrap";

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

	function DemoScene() {
		let { scene, camera } = useThree();
		let [autoRotate, setAutoRotate] = useState(true);
		let controlsRef = useRef<OrbitControlsStdLib | null>(null);

		scene.background = new Color('white');

		let splats = new LumaSplatsThree({
			source: 'https://lumalabs.ai/capture/f25ed19b-225c-4ec7-9101-d71d8625065e',
			enableThreeShaderIntegration: false,
			particleRevealEnabled: true,
		});
	  
		scene.add(splats);
	  
		splats.onInitialCameraTransform = transform => {
			transform.decompose(camera.position, camera.quaternion, new Vector3());
		};

		return (
			<>
				<PerspectiveCamera />
				<OrbitControls
					ref={controlsRef}
					autoRotate={autoRotate}
					autoRotateSpeed={0.5}
					enableDamping={true}
					onStart={() => setAutoRotate(false)}
					makeDefault
				/>
			</>
		);
	}

	return (
		<>
			<Button style={{marginTop: '-110px', marginLeft:'-80px'}} onClick={click}>Back</Button>
			<h4 style={{marginTop: '-28px', marginBottom: '36px', fontFamily:'Arial'}}>+ Create Living Artifact</h4>
			<Row>
				<Col>
					<div style={{ position: 'relative', width: '60vw', height: '60vh' }}>
						{/* White Frame */}
						{/* Centered White Rectangle Overlay */}
						<div style={{
							position: 'absolute',
							top: '50%',
							left: '50%',
							transform: 'translate(-50%, -50%)', // Centers the rectangle
							width: '90%', // Set desired width (e.g., 50% of canvas width)
							height: '90%', // Set desired height (e.g., 50% of canvas height)
							border: '2px solid white',
							backgroundColor: 'rgba(255, 255, 255, 0.1)', // Slightly transparent background
							pointerEvents: 'none', // Allows interaction with the canvas below
							zIndex: 10, // Ensures the rectangle is on top of the canvas
						}} />
						{/* Canvas */}
						<Canvas
							gl={{
								antialias: false,
								// toneMapping: CineonToneMapping,
							}}
							key={"1"}
							style={{
								width: '100%',
								height: '100%',
								marginTop: '-28px'
							}}
							onPointerDown={(e) => e.preventDefault()}
						>
							<AdaptiveDpr pixelated />
							<DemoScene />
						</Canvas>
					</div>
				</Col>
				<Col>
					<Form>
						<p style={{marginBottom: '50px'}}><b>Please rotate model to look at face and click Start Processing</b></p>
						<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
							<Form.Label>Luma Scan Url</Form.Label>
							<Form.Control type="text" placeholder="https://lumalabs.ai/capture/f25ed19b-225c-4ec7-9101-d71d8625065e" />
						</Form.Group>
					</Form>
					<Form>
						<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
							<Form.Label>Audio File Url</Form.Label>
							<Form.Control type="text" placeholder="audio.mp3" />
						</Form.Group>
					</Form>
					<Dropdown>
						<Dropdown.Toggle id="dropdown-basic">
							Age Range
						</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item href="#/action-1">5-12</Dropdown.Item>
							<Dropdown.Item href="#/action-2">12-16</Dropdown.Item>
							<Dropdown.Item href="#/action-3">16+</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>

					<Button style={{marginTop: '20px'}} onClick={click}>Start Processing</Button>

				</Col>
			</Row>

			<div className="space-y-6 mt-8" style={{marginTop: '200px'}}>
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
	);
}
