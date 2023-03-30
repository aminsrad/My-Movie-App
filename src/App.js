import { useState } from "react";
import "./App.css";
import Addmovie from "./components/Addmovie";
import Cardlist from "./components/Cardlist";
import Movieform from "./components/Movieform";
import SearchAppBar from "./components/Navbar";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 0,
      title: "The God Father",
      categorie: "Drama",
      language: "english",
      year: "1972",
      photo:
        "https://publisher-ncreg.s3.us-east-2.amazonaws.com/pb-ncregister/swp/hv9hms/media/20220617210644_9edceb9946f62dc8489ba7d292fde61ef0dfc173fd21c2339deb1e228bd8854a.png",
      Rate: "8.5",
      status: "available",
    },
  ]);
  const addmovie = (addedmovie) => {
    setMovies([...movies, addedmovie]);
  };

  return (
    <div className="App">
      <SearchAppBar />
      <div className="container">
        <Cardlist movies={movies} />
      </div>

      <Addmovie>
        <Movieform movies={addmovie} />
      </Addmovie>
    </div>
  );
}

export default App;
