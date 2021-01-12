import React from "react";




function About ({ about, image = "https://via.placeholder.com/215" }) {
    const img = "blog logo"
  return (
    <aside>
        <img src={image} alt={img}></img>
        <p>{about}</p>
    </aside>
  );
}

export default About;
