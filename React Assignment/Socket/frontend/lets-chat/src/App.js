import "./App.css";
import io from "socket.io-client";
import { useState, useEffect } from "react";
// import { nanoid } from "nanoid";

//no dotenv
const socket = io.connect("http://localhost:3001"); //need to connect to backend

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const joinRoom = () => {
    if (username!=="" && room !==""){
        socket.emit("join_room",room)
    }
  };
  
  // socket.on("connect", () => {
  //   const transport = socket.io.engine.transport.name; // in most cases, "polling"
  
  //   socket.io.engine.on("upgrade", () => {
  //     const upgradedTransport = socket.io.engine.transport.name; // in most cases, "websocket"
  //   });
  // });

  // const sendChat= (e) =>{
  //   e.preventDefault()
  //   socket.emit("chat", {message})    //in backend used chat so using "chat" here also
  //   setMessage('')
  // }

  return (
    <div className="App">
      <h1>Lets Chat</h1>
      <input
        type="text"
        name="chat"
        placeholder="Zinga..."
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="text"
        name="chat"
        placeholder="Room Id..."
        onChange={(e) => {
          setRoom(e.target.value);
        }}
      />
      <button onClick={joinRoom}>Join A Chat</button>

      {/* <header className="App-header">
        <form onSubmit={sendChat}> 
          <input type="text" name="chat"
          placeholder="send Text"
          value={message} 
          onChange={(e)=>{
            setMessage(e.target.value)
          }}
          />
          <button type="submit">Send</button>
        </form>
      </header> */}
    </div>
  );
}

export default App;
