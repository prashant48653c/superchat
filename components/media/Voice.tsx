'use client';

import dynamic from 'next/dynamic';
import React, { useState } from 'react';
 
import { IoMicOutline, IoMicOffOutline } from 'react-icons/io5';

const ReactMediaRecorder = dynamic(() =>
  import('react-media-recorder').then((mod) => mod.ReactMediaRecorder),
  { ssr: false }
);
// mod is an object and we want ReactMediaRecorder which is a key inside the object so after import mod gets tha object and we set variable ReactMediaRecorder to mod.ReactMediaRecorder.

const VoiceRecorder: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);

  const handleToggleRecording = (startRecording: () => void, stopRecording: () => void) => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
    setIsRecording(!isRecording);
  };

  return (
    <div className="voice-recorder">
      <ReactMediaRecorder
        audio
        render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
          <div className="recorder-container">
            <div
              onClick={() => handleToggleRecording(startRecording, stopRecording)}
              className="record-button"
            >
              {isRecording ? <IoMicOffOutline size={20} color="red" /> : <IoMicOutline size={20} color="green" />}
            </div>

            

            {mediaBlobUrl && (
              <div  className="audio-controls absolute bottom-20 left-44">
                <audio src={mediaBlobUrl} controls />
               
              </div>
            )}
          </div>
        )}
      />
    </div>
  );
};

export default VoiceRecorder;
