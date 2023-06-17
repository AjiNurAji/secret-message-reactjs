import React, { useEffect, useState } from "react";
import axios from "axios";

const ShowMessage = () => {
  const [datas, setData] = useState([]);

  useEffect(() => {
    getMessages();
  }, []);

  // getMessages
  const getMessages = async () => {
    const response = await axios.get("https://server-message-production.up.railway.app/messages");
    console.log(response.data);
    setData(response.data);
  };

  return (
    <div className="m-3 p-4 bg-light bg-opacity-10 rounded">
      <h2 className="p-3 text-center">Messages</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {datas.map((data) => (
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <div className="card-title yellow">{data.name}</div>
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
