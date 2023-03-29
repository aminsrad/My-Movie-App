import { CardMedia } from "@mui/material";
import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [pets, setpets] = useState([
    {
      id: 0,
      name: "Buddy",
      race: "Dog",
      type: "Hound",
      location: "California",
      photo:
        "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSqBxhZ7_-vJ7-611CrRPwevycxdQ-ONuCRlnympvCUF18qzy-BFa6D7QOR8LqX3SXKi9VcwcyAUuLZxg0",
      status: "available",
    },
  ]);

  return (
    <div className="App">
      <Card pets={pets} />
    </div>
  );
}

export default App;
