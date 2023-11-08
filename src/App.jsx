import { useState } from "react";
import { puppyList } from "./data";

import "./App.css";

function App() {
  const [puppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  const featuredPup = puppies.find((puppy) => puppy.id === featPupId);
  console.log(featuredPup);

  return (
    <div className="container">
      {featPupId && (
        <div className="featured-puppy">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
      <div className="puppy-list">
        {puppies.map((puppy) => (
          <p
            onClick={() => {
              setFeatPupId(puppy.id);
              console.log(featPupId);
            }}
            key={puppy.id}
          >
            {puppy.name}
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
