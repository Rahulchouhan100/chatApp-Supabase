import React from "react";
import { useState, useEffect } from "react";

import { supabase } from "../../utils/helper";

const Chat = () => {
  const [text, setText] = useState("");
  const [clickMessage, setClickMessage] = useState([]);
  const [title, setTitle] = useState();

  const handlerSend = async () => {
    setClickMessage([...clickMessage, text]);
    setText("");
    setTitle(text);
    const { data, err } = await supabase.from("chatdata").insert({ title });
  };
  return (
    <>
      <div className="w-6/12 h-max ml-28 mt-10">
        <h1 className="bg-blue-500 w-max rounded-lg px-2 text-white mb-2">
          user1{" "}
        </h1>
        <div className="border-2 rounded-lg p-2 w-96 h-96 flex  flex-col-reverse overflow-y-hidden">
          <div>
            {clickMessage.map((curElm, ind) => (
              <p key={ind} className="my-2 rounded-sm bg-gray-200 p-1">
                {curElm}
              </p>
            ))}
          </div>
        </div>
        <div className="flex mt-5 w-[26rem] gap-2">
          <input
            type="text"
            className="border-2 w-4/5"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className="bg-green-600 px-1 text-white"
            onClick={handlerSend}
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default Chat;
