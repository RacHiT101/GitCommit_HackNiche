import React, { useEffect, useState } from 'react'
import io from "socket.io-client";
import Chat from './components/Chat';
const socket = io.connect("http://localhost:5002");

const Contact = () => {

  

const [username, setUsername] = useState("");
const [room, setRoom] = useState("1");
const [ShowChats, setShowChats] = useState(false);


const handleLoadData = () => {
  const storedData = localStorage.getItem('name');
  setUsername(storedData || ''); // Set data to storedData or an empty string if it's null
};


const joinroom = () => {
  if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChats(true)
    }
  };
  
  useEffect(() => {
    handleLoadData();
    joinroom();
  }, [joinroom]);
    
return (
    <div>
        <Chat socket={socket} username={username} room={room} />
    </div>
  )
}

export default Contact;