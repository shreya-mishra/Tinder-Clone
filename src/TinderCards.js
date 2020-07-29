import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCard.css";
import database from "./firebase";

function TinderCards() {
  const [people, setPeople] = useState([]);
  /*{
      name: "steve Jobs",
      url:
        "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg",
    },
    {
      name: "Mark Zuckerberg",
      url:
        "https://api.time.com/wp-content/uploads/2020/07/Mark-Zuckerberg-Surfing.jpg?w=762&quality=85",
    },
  ]);*/

  useEffect(() => {
    //this is whrere the code runs
    const unsubscribe = database
      .collection("people")
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );
    return () => {
      //this is cleanup...
      unsubscribe();
    };

    //this will run once when the component loads and never again
  }, []);
  //const people=[];
  //setPeople([....people,"Shriya","Shreya"])
  return (
    <div>
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}
export default TinderCards;
