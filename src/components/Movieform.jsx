import React, { useState } from "react";
const Movieform = ({ movies }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setposterURL] = useState("");
  const [status, setStatus] = useState("");

  return (
    <div>
      <form
        style={{
          maxWidth: "300px",
          padding: "10px",
          backgroundColor: "white",
          textAlign: "center",
          margin: "0 auto",
        }}
      >
        <div className="mb-3">
          <label for="Title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className="mb-3">
          <label for="Description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>

        <div className="mb-3">
          <label for="posterURL" className="form-label">
            posterURL:
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setposterURL(e.target.value)}
            value={posterURL}
          />
        </div>
        <div className="mb-3">
          <label for="Status" className="form-label">
            Status
          </label>

          <select
            class="form-select"
            aria-label="Default select example"
            onChange={(e) => setStatus(e.target.value)}
            value={status}
          >
            <option selected>What is the movie status?</option>
            <option value="Available">Available</option>
            <option value="Saled">Saled</option>
          </select>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault();
            movies({
              title,
              description,
              posterURL,
              status,
            });
            alert("movie added ");
            setTitle("");
            setDescription("");
            setposterURL("");
            setStatus("");
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Movieform;
