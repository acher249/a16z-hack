import { useState, useEffect, useCallback } from "react";
import { API } from "aws-amplify";
import { NoteType } from "../types/note";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";
import { onError } from "../lib/errorLib";
import { BsPencilSquare } from "react-icons/bs";
import { ListGroup, Button, Container, Row, Col, Form, InputGroup, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useAppContext } from "../lib/contextLib";
import { Conversation } from '@11labs/client';

import "./Home.css";

export default function Home() {
  const [notes, setNotes] = useState<Array<NoteType>>([]);
  const { isAuthenticated } = useAppContext();
  const [isLoading, setIsLoading] = useState(true);
  const nav = useNavigate();
  
  const goToLumaPage = () => {
    console.log("Going to Luma page");
    nav("/lumaViewer");
  }

  const goToCreationPage = () => {
    console.log("Going to Creation page");
    nav("/lumaCreation");
  }

  function renderLander() {
    return (
      <div className="lander">
        <h1>explAIn</h1>
        <p className="text-muted">A simple note taking app</p>
      </div>
    );
  }

  function renderNotes() {
    return (
      <div className="notes">
        {/* Existing Buttons */}
        <div className="d-flex gap-2 flex-wrap">
          {/* <Button onClick={goToLumaPage}>Go To Luma</Button> */}

          <Container>
            {/* Search Bar */}
            <Row className="my-4">
              <Col style={{marginTop: '-26px'}}>
                <Row>
                  <Col>
                    <h4 style={{fontFamily: 'Arial'}}>Explore The Collection</h4>
                  </Col>
                  <Col>
                    <Button onClick={goToCreationPage} style={{float: 'right', marginBottom: '10px', marginTop: '6px', borderRadius: "20px",}}>+ Create Living Artifact</Button>
                  </Col>
                </Row>

                <InputGroup>
                  <Form.Select aria-label="Search Filter" defaultValue="All Fields">
                    <option>All Fields</option>
                    <option>Object Type / Material</option>
                    <option>Geographic Location</option>
                    <option>Date / Era</option>
                  </Form.Select>
                  <Form.Control type="text" placeholder="Search all fields" />
                  <Button variant="outline-secondary">🔍</Button>
                </InputGroup>
              </Col>
            </Row>

            {/* Filter Options */}
            <Row className="my-4">
              <Col md={3}>
                <Form.Select aria-label="Filter by Object Type / Material">
                  <option>Object Type / Material</option>
                </Form.Select>
              </Col>
              <Col md={3}>
                <Form.Select aria-label="Filter by Geographic Location">
                  <option>Geographic Location</option>
                </Form.Select>
              </Col>
              <Col md={3}>
                <Form.Select aria-label="Filter by Date / Era">
                  <option>Date / Era</option>
                </Form.Select>
              </Col>
              <Col md={3}>
                <Button variant="outline-secondary">
                  Greek and Roman Art <span aria-hidden="true">✖</span>
                </Button>
              </Col>
            </Row>

            {/* Card Grid */}
            <Row className="mt-4">
              {[
                {
                  title: 'Lucius Verus',
                  location: 'Metropolitan Museum of Art, NYC, NY',
                  imgSrc: '/luc.png'
                },
                {
                  title: 'Marble Sarcophagus Fragment',
                  location: 'Metropolitan Museum of Art, NYC, NY',
                  imgSrc: '/multi.png'
                },
                {
                  title: 'Nefratiti Bust',
                  location: 'Neues Museum, Berlin',
                  imgSrc: '/egypt.png'
                },
                {
                  title: 'Mahatma Gandhi',
                  location: 'Bihar, India',
                  imgSrc: '/gandi.png'
                },
                {
                  title: 'Stone Henge',
                  location: 'Wiltshire, England',
                  imgSrc: 'stone.png'
                },
                {
                  title: 'Triceretops Skull',
                  location: 'Natural History Museum, NYC, NY',
                  imgSrc: 'tri.png'
                },
              ].map((object, idx) => (
                <Col key={idx} md={4} className="mb-4">
                  <Card className="text-center" style={{ backgroundColor: '#FFFFFF', borderRadius: "20px" }}>
                    <Card.Body>
                      <img 
                        src={object.imgSrc}
                        style={{width:'100%', height: '230px', marginTop: '20px', borderRadius: "20px"}}
                        ></img>
                      <Card.Title style={{marginTop:'20px'}}>{object.title}</Card.Title>
                      <p>{object.location}</p>
                      <Button 
                        variant="primary"
                        style={{marginTop:'0px', borderRadius: "20px", width: '100px'}}
                        onClick={goToLumaPage}
                        >Jump In</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
          {/* <Button onClick={getSignedUrl}>Get Signed URL</Button>
          <Button onClick={handleTextToSpeech}>Text to Speech</Button> */}
        </div>
      </div>
    );
  }

  return (
    <div className="Home">
      {isAuthenticated ? renderNotes() : renderLander()}
    </div>
  );
}