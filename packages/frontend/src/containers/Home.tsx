import { useState, useEffect, useCallback } from "react";
import { API } from "aws-amplify";
import { NoteType } from "../types/note";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";
import { onError } from "../lib/errorLib";
import { BsPencilSquare } from "react-icons/bs";
import { ListGroup, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useAppContext } from "../lib/contextLib";
import { Conversation } from '@11labs/client';
import "./Home.css";

export default function Home() {
  const [notes, setNotes] = useState<Array<NoteType>>([]);
  const { isAuthenticated } = useAppContext();
  const [isLoading, setIsLoading] = useState(true);
  const [conversation, setConversation] = useState<any>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [conversationMode, setConversationMode] = useState<'speaking' | 'listening' | 'processing' | 'silent'>('silent');
  const nav = useNavigate();

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
          onError(error);
        },
        onModeChange: (mode) => {
          console.log('Mode changed:', mode);
          setConversationMode(mode.mode);
        }
      });

      setConversation(newConversation);
    } catch (error) {
      console.error('Error starting conversation:', error);
      onError(error);
    }
  };

  const endConversation = async () => {
    if (conversation) {
      await conversation.endSession();
      setConversation(null);
    }
  };

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
    nav("/luma");
  }

  const handleTextToSpeech = async () => {
    try {
      const response = await API.post("notes", "/tts", {
        body: {
          text: "Hello"
        }
      });
      
      if (response.statusCode !== 200) {
        throw new Error(response.body.error || 'Failed to generate speech');
      }
    
      const binaryData = Uint8Array.from(atob(response.body), c => c.charCodeAt(0));
      const blob = new Blob([binaryData], { type: 'audio/mpeg' });
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
      
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error generating speech:", error);
      throw new Error(error instanceof Error ? error.message : 'Failed to generate speech');
    }
  };

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
        
        {/* Conversation Interface */}
        <div className={`conversation-interface p-4 mb-4 rounded ${conversationMode}`}>
          <div className="status-indicators mb-3">
            <div className="connection-status">
              Status: {isConnected ? 'Connected' : 'Disconnected'}
            </div>
            <div className="mode-status">
              Mode: {conversationMode.charAt(0).toUpperCase() + conversationMode.slice(1)}
            </div>
          </div>
          
          <div className="d-flex gap-2">
            <Button 
              onClick={startConversation} 
              disabled={isConnected}
              variant="primary"
            >
              Start Conversation
            </Button>
            <Button 
              onClick={endConversation} 
              disabled={!isConnected}
              variant="secondary"
            >
              End Conversation
            </Button>
          </div>
        </div>

        {/* Existing Buttons */}
        <div className="d-flex gap-2 flex-wrap">
          <Button onClick={goToLumaPage}>Go To Luma</Button>
          <Button onClick={getSignedUrl}>Get Signed URL</Button>
          <Button onClick={handleTextToSpeech}>Text to Speech</Button>
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