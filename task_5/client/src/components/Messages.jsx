import React from "react";
import Autocomplete from "./Autocomplete";
import axios from "Axios";
import Cookies from "universal-cookie";

function Messages(props) {
  const { messagesData, setMessagesData } = props;
  const [recipients, setRecipients] = React.useState([]);
  const [user, setUser] = React.useState("");
  const cookies = new Cookies();

  React.useEffect(() => {
    setUser(cookies.get("user"));
  }, []);

  axios.defaults.withCredentials = true;

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/messages");
        console.log(res);
        res.data.map((item) => {
          if (item.recipent === user) {
            setMessagesData((prev) => [...prev, item]);
          }
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [user]);

  const messages = [];
  const filtered = messagesData.filter((el) => {
    const isDuplicate = messages.includes(el.message);
    if (!isDuplicate) {
      messages.push(el);
      return true;
    }
    return false;
  });

  const messagesHtml = messages.map((mes) => {
    const { sender, title, message } = mes;
    return (
      <div>
        <p>From: {sender}</p>
        <p>Title: {title}</p>
        <p>Message: {message}</p>
      </div>
    );
  });

  return (
    <div className="bg-sky-100 w-2/6 p-10 font-sans rounded flex flex-col items-center text-neutral-900">
      <h2>User: {user}</h2>
      <form className="flex flex-col min-w-full items-center my-3">
        <label htmlFor="recipient">Recipient:</label>
        <Autocomplete suggestions={recipients} />
        <label htmlFor="title">Title:</label>
        <input
          className="m-3 placeholder:mx-1 placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md p-3"
          type="text"
          name="title"
          id="title"
        />
        <textarea className="min-w-full m-3 placeholder:mx-1 placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md"></textarea>
        <button className="bg-sky-900 text-white px-5 py-3 rounded mt-5">
          Send a message
        </button>
      </form>
      <p>{messagesHtml}</p>
    </div>
  );
}

export default Messages;
