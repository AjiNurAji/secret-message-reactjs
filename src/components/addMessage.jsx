import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

// Show Messages
import ShowMessage from "./showMessage";

const AddMessage = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false)

  const saveMessage = async (e) => {
    e.preventDefault();
    if (!name || !message) {
      toast.error("Mohon isi kolom yang disediakan!!");
    } else {
      setLoading(true)
      try {
        // await axios.post("https://secrett-message.000webhostapp.com/api/message", {
        //   from: name,
        //   message,
        // }
        await axios({
          method: 'post',
          url: "https://secrett-message.000webhostapp.com/api/message",
          data: {
            from: name,
            message: message,
          }
        }).then((res) => {
          setLoading(false)
          toast.success("Berhasil dikirim, Terimakasih!!");
        });
      } catch (error) {
        setLoading(false)
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
            <img src="/favicon.svg" alt="this is icon" className="me-1" height="30" style={{ transform: 'rotate(-15deg)'}}></img>
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
            {loading ? (
              <button class="btn" disabled>
                <span class="spinner-border spinner-border-sm text-warning" role="status" aria-hidden="true"></span>
              </button>
            ) : (
              <button type="submit" className="btn">
                Kirim
              </button>
            ) }
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
