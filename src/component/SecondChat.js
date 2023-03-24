import React, { useEffect, useState } from "react";
import { supabase } from "../../utils/helper";

const SecondChat = () => {
  const [getData, setGetData] = useState(null);
  const [fetchErr, setFetchErr] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("chatdata").select();
      if (error) {
        setFetchErr("Could not fetch the data");
        setGetData(null);
      }
      if (data) {
        setGetData(data);
        setFetchErr(null);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="w-6/12 m-10">
        <h2 className="bg-red-500 w-max rounded-lg px-2 text-white mb-2">
          user2
        </h2>
        <div className="border-2 rounded-lg p-2 w-96 h-96 flex flex-col-reverse">
          {fetchErr && <p>{fetchErr}</p>}
          {getData && (
            <div>
              {getData.map((getData, ind) => {
                <p key={ind}>
                  {getData.title} {console.log(getData.title)}
                </p>;
              })}
            </div>
          )}
        </div>
        <div className="flex mt-5 w-[26rem] gap-2">
          <input type="text" className="border-2 w-4/5" />
          <button className="bg-green-600 px-1 text-white">Send</button>
        </div>
      </div>
    </div>
  );
};

export default SecondChat;
