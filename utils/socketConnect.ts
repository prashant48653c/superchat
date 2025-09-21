// hooks/useSocket.ts
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

const UseSocket = ( ) => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const url=process.env.NEXT_PUBLIC_CHAT_URL as string;
    const socketConnection = io(url);

    setSocket(socketConnection);
 
    return () => {
      socketConnection.disconnect();
    };
  }, []);

  return socket;
};

export default UseSocket;
