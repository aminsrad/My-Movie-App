import { useState } from "react";
import "./App.css";
import Addmovie from "./components/Addmovie";
import Cardlist from "./components/Cardlist";
import Movieform from "./components/Movieform";
import SearchAppBar from "./components/Navbar";
import Searchmovie from "./components/Searchmovie";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 0,
      title: "The God Father",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque excepturi neque a.",
      posterURL:
        "https://publisher-ncreg.s3.us-east-2.amazonaws.com/pb-ncregister/swp/hv9hms/media/20220617210644_9edceb9946f62dc8489ba7d292fde61ef0dfc173fd21c2339deb1e228bd8854a.png",
      Rating: "8.5",
      status: "available",
    },
  ]);
  const addmovie = (addedmovie) => {
    setMovies([...movies, addedmovie]);
  };
  const [query, setQuery] = useState("");

  return (
    <div className="App">
      {/* <SearchAppBar setQuery={setQuery} /> */}
      <Searchmovie setQuery={setQuery} />
      <div className="container">
        <Cardlist movies={movies} query={query} />
      </div>

      <Addmovie>
        <Movieform movies={addmovie} />
      </Addmovie>
    </div>
  );
}

export default App;
