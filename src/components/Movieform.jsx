import React, { useState } from "react";

const Movieform = ({ movies }) => {
  const [title, setTitle] = useState("");
  const [categorie, setCategorie] = useState("");
  const [language, setLanguage] = useState();
  const [year, setYear] = useState("");
  const [rate, setRate] = useState("");
  const [photo, setPhoto] = useState("");
  const [status, setstatus] = useState("");

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
          <label for="Category" className="form-label">
            Category
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setCategorie(e.target.value)}
            value={categorie}
          />
        </div>
        <div className="mb-3">
          <label for="Language" className="form-label">
            Language
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setLanguage(e.target.value)}
            value={language}
          />
        </div>
        <div className="mb-3">
          <label for="Year" className="form-label">
            Year
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setYear(e.target.value)}
            value={year}
          />
        </div>

        <div className="mb-3">
          <label for="Status" className="form-label">
            Image source:
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setPhoto(e.target.value)}
            value={photo}
          />
        </div>
        <div className="mb-3">
          <label for="Rate" className="form-label">
            Rate
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setRate(e.target.value)}
            value={rate}
          />
        </div>
        <div className="mb-3">
          <label for="Status" className="form-label">
            Status
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setstatus(e.target.value)}
            value={status}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault();
            movies({ title, categorie, language, year, photo, rate, status });
            alert("movie added");
            setTitle("");
            setCategorie("");
            setLanguage("");
            setYear("");
            setPhoto("");
            setRate("");
            setRate("");
            setstatus("");
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Movieform;
