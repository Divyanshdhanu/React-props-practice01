import React from "react";
import Card from "./Card.jsx";
import contacts from "./contacts.js";
import ImageCircle from "./image/ImageCircle.jsx";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <ImageCircle image="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg" />
      <Card
        name={contacts[0].name}
        image={contacts[0].imgURL}
        phone={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        image={contacts[1].imgURL}
        phone={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        image={contacts[2].imgURL}
        phone={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
