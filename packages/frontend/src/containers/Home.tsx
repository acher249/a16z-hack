import { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { NoteType } from "../types/note";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";
import { onError } from "../lib/errorLib";
import { BsPencilSquare } from "react-icons/bs";
import { ListGroup, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useAppContext } from "../lib/contextLib";
import "./Home.css";

export default function Home() {
  const [notes, setNotes] = useState<Array<NoteType>>([]);
  const { isAuthenticated } = useAppContext();
  const [isLoading, setIsLoading] = useState(true);
  const nav = useNavigate();

  useEffect(() => {
    async function onLoad() {
      if (!isAuthenticated) {
        return;
      }
    
      try {
        const response = await loadNotes();
        const notesArray = Array.isArray(response) ? response : response.items || [];
        setNotes(notesArray);
      } catch (e) {
        onError(e);
      }
    
      setIsLoading(false);
    }

    onLoad();
  }, [isAuthenticated]);

  function loadNotes() {
    return API.get("notes", "/notes", {});
  }

  function formatDate(str: undefined | string) {
    return !str ? "" : new Date(str).toLocaleString();
  }
  
  const goToLumaPage = () => {
    console.log("click click");

    nav("/luma");
  }

  const callGetSignedUrl = async () => {
    const response = await API.get("notes", "/signed-url", {});
    console.log("response", response);
    const data = JSON.parse(response.body);
    console.log("data", data);
    const signedUrl = data.signedUrl;
    console.log("signedUrl", signedUrl);
  }

  const handleTextToSpeech = async () => {
    try {
      const response = await API.post("notes", "/tts", {
        body: {
          text: "Hello"
        }
      });
      
      console.log('Raw response:', response);
      console.log('Response type:', typeof response);
      console.log('Response body:', response.body);
      
      if (response.statusCode !== 200) {
        throw new Error(response.body.error || 'Failed to generate speech');
      }
    
      // Convert base64 to Uint8Array
      const binaryData = Uint8Array.from(atob(response.body), c => c.charCodeAt(0));
      
      console.log('Binary data length:', binaryData.length);
      
      // Create blob from binary data
      const blob = new Blob([binaryData], { type: 'audio/mpeg' });
      
      console.log('Blob size:', blob.size);
      
      // Create and trigger download
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'speech.mp3';
      
      if (window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(blob, 'speech.mp3');
      } else {
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
      
      // Cleanup
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error generating speech:", error);
      console.error("Error details:", {
        name: error.name,
        message: error.message,
        stack: error.stack
      });
      throw new Error(error instanceof Error ? error.message : 'Failed to generate speech');
    }
  };
  // Optional: Add TypeScript types
  interface APIResponse {
    statusCode: number;
    headers: Record<string, string>;
    body: string;
    isBase64Encoded: boolean;
  }
  
  interface ErrorResponse {
    error: string;
    details?: string;
  }

  function renderNotesList(notes: NoteType[]) {
    return (
      <>
        <LinkContainer to="/notes/new">
          <ListGroup.Item action className="py-3 text-nowrap text-truncate">
            <BsPencilSquare size={17} />
            <span className="ms-2 fw-bold">Create a new note</span>
          </ListGroup.Item>
        </LinkContainer>
        {notes.map(({ noteId, content, createdAt }) => (
          <LinkContainer key={noteId} to={`/notes/${noteId}`}>
            <ListGroup.Item action className="text-nowrap text-truncate">
              <span className="fw-bold">{content.trim().split("\n")[0]}</span>
              <br />
              <span className="text-muted">
                Created: {formatDate(createdAt)}
              </span>
            </ListGroup.Item>
          </LinkContainer>
        ))}
      </>
    );
  }

  function renderLander() {
    return (
      <div className="lander">
        <h1>HistoryAlive</h1>
        <p className="text-muted">A simple note taking app</p>
      </div>
    );
  }

  function renderNotes() {
    return (
      <div className="notes">
        <h2 className="pb-3 mt-4 mb-3 border-bottom">Explore Collections</h2>
        {/* <ListGroup>{!isLoading && renderNotesList(notes)}</ListGroup> */}
        <Button style={{marginTop: '20px'}} onClick={goToLumaPage}>Go To Luma</Button>
        <Button style={{marginTop: '20px'}} onClick={callGetSignedUrl}>Get Signed URL</Button>
        <Button style={{marginTop: '20px'}} onClick={handleTextToSpeech}>Text to Speech</Button>
      </div>
    );
  }

  return (
    <div className="Home">
      {isAuthenticated ? renderNotes() : renderLander()}
    </div>
  );
}
