'use client';

import React, { useState } from 'react';
import { ReactMediaRecorder } from 'react-media-recorder';
import { IoMicOutline, IoMicOffOutline } from 'react-icons/io5';

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
