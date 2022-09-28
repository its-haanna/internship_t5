import React from "react";
import Messages from "./components/Messages";
import Name from "./components/Name";
import axios from "Axios";

function App() {
  const [user, setUser] = React.useState("");
  const [messages, setMessages] = React.useState([]);

  return (
    <>
      {!user ? (
        <Name setUser={setUser} />
      ) : (
        <Messages messagesData={messages} setMessagesData={setMessages} />
      )}
    </>
  );
}

export default App;
