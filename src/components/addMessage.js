import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

// Show Messages
import ShowMessage from "./showMessage";

const AddMessage = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const saveMessage = async (e) => {
    e.preventDefault();
    if (!name || !message) {
      toast.error("Mohon isi kolom yang disediakan!!");
    } else {
      try {
        await axios.post("https://server-message-production.up.railway.app/messages", {
          name,
          message,
        });
        toast.success("Berhasil dikirim, Terimakasih!!");
      } catch (error) {
        toast.error("Gagal dikirim, silahkan coba kembali!!");
      }
    }
  };

  return (
    <div className="container">
      {/* Form Submit data */}
      <form action="" method="post" onSubmit={saveMessage}>
        <div className="m-3 p-4 bg-light bg-opacity-10 rounded">
          <h2 className="p-2 text-center">
            Secret<span className="yellow">Message</span>
            <p
              className="opacity-50 subtitle"
              style={{ fontSize: "17px", fontWeight: "normal" }}
            >
              Kirim pesan rahasia kepada Aji!!
            </p>
          </h2>

          <div className="mb-3 row">
            <label className="form-label col-sm-2" htmlFor="name">
              From
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
                id="name"
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label className="form-label col-sm-2" htmlFor="message">
              Message
            </label>
            <div className="col-sm-10">
              <textarea
                name="message"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="form-control"
                rows="4"
                style={{ resize: "none" }}
              ></textarea>
            </div>
          </div>

          <div className="mb-3 d-flex justify-content-end">
            <button type="submit" className="btn">
              Kirim
            </button>
          </div>

          <a href="https://instagram.com/ajnrji_" className="text-light">
            Author
          </a>
        </div>
      </form>

      <ShowMessage />
    </div>
  );
};

export default AddMessage;
