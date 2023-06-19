import React, { useEffect, useState } from "react";
import axios from "axios";

const ShowMessage = () => {
  const [datas, setData] = useState([]);

  useEffect(() => {
    getMessages();
  }, []);

  // getMessages
  const getMessages = async () => {
    const response = await axios.get("https://secrett-message.000webhostapp.com/api/messages");
    setData(response.data);
  };

  return (
    <div className="m-3 p-4 bg-light bg-opacity-10 rounded">
      <h2 className="p-3 text-center">
        Messages
        <img
          src="/favicon.svg"
          alt="this is icon"
          className="ms-1"
          height="30"
          style={{ transform: "rotate(15deg)" }}
        ></img>
        <p
          className="opacity-50 subtitle"
          style={{ fontSize: "17px", fontWeight: "normal" }}
        >
          Reload/Refresh halaman ini untuk melihat pesan yang baru dikirim!
        </p>
      </h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {datas.map((data) => (
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <div className="card-title yellow">{data.from}</div>
                <p className="card-text">{data.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowMessage;
