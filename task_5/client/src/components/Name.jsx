import React from "react";
import Cookies from "universal-cookie";

function Name(props) {
  const { setUser } = props;

  function submit(event) {
    const input = document.getElementById("name");
    setUser(input.value);

    const cookies = new Cookies();
    cookies.set("user", input.value);
  }

  return (
    <form className="bg-sky-100 w-2/6 p-10 font-sans rounded flex flex-col items-center text-neutral-900">
      <label htmlFor="name">Name:</label>
      <input
        className="m-3 placeholder:mx-1 placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md p-3"
        type="text"
        name="name"
        id="name"
      />
      <button
        type="button"
        onClick={submit}
        className="bg-sky-900 text-white px-5 py-3 rounded mt-5"
      >
        Proceed
      </button>
    </form>
  );
}

export default Name;
