import React, { useState } from "react";
import "../Styles/ContactMe.css";
import TextField from "@mui/material/TextField";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let fromname = data.name.trim();
    let emailID = data.email.trim();
    let phoneNumber = data.phoneNumber.trim();
    let message = data.message.trim();
    emailjs.init("7it6lhchycIVPkzgm");
    emailjs.send("service_65np1yr", "template_mhuf652", {
      from_name: fromname,
      name:
        fromname === null || fromname === "" ? emailID.split("@")[0] : fromname,
      email: emailID,
      phone_num: phoneNumber,
      message: message,
    });
    setData({ name: "", email: "", phoneNumber: "", message: "" });
  };
  return (
    <div className="contact-me-container" id="contact">
      <h1 className="contact-me-heading">Write to me</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          paddingRight: "1rem",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            paddingLeft: "11rem",
            paddingTop: "2rem",
            display: "flex",
            columnGap: "4rem",
            flexWrap: "wrap",
            columnCount: "2",
            flexWrap: "wrap",
            columnGap: "1rem",
          }}
        >
          <div>
            <div className="form-group">
              <label for="exampleFormControlInput1">Name</label>
              <input
                type="name"
                className="form-control"
                name="name"
                placeholder="Name"
                style={{ maxWidth: "500px", width: "500px" }}
                required
                value={data.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label for="exampleFormControlInput1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Email"
                name="email"
                style={{ maxWidth: "500px", width: "500px" }}
                required
                value={data.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label for="exampleFormControlInput1">Phone Number</label>
              <input
                type="tel"
                class="form-control"
                id="exampleFormControlInput1"
                name="phoneNumber"
                placeholder="Phone number"
                required
                style={{ maxWidth: "500px", width: "500px" }}
                value={data.phoneNumber}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group" style={{ paddingTop: "1.5rem" }}>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              required
              name="message"
              placeholder="Message"
              value={data.message}
              onChange={handleChange}
              style={{
                background: "#6BC78A",
                mixBlendMode: "lighten",
                color: "whitesmoke",
                width: "499px",
                height: "247px",
              }}
            ></textarea>
          </div>
        </div>
        <div style={{ paddingTop: "1rem", paddingLeft: "11rem" }}>
          <button className="contact-me-button" type="submit">
            Send
          </button>
        </div>
      </form>
      {/* <div className="partition-container">
        <div>
          <h1 className="contact-me-heading">Write to me</h1>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              rowGap: "2.8rem",
              paddingTop: "1rem",
              paddingLeft: "11rem",
            }}
            inputProps={{
              style: { color: "whitesmoke" },
            }}
          >
            <TextField
              id="outlined-multiline-flexible"
              label="Name"
              multiline
              maxRows={4}
              style={{ maxWidth: 500 }}
              inputProps={{
                style: { color: "whitesmoke" },
              }}
            />
            <TextField
              id="outlined-multiline-flexible"
              label="Email"
              multiline
              maxRows={4}
              style={{
                maxWidth: 500,
              }}
            />
            <button className="contact-me-button">Send</button>
          </div>
        </div>
        <div style={{ paddingTop: "8rem", maxWidth: "500px" }}>
          <TextField
            id="outlined-multiline-flexible"
            label="Message"
            multiline
            maxRows={4}
            inputProps={{
              style: { color: "whitesmoke" },
            }}
          />
        </div>
      </div> */}
    </div>
  );
};

export default ContactMe;
