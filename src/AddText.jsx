import React from "react";
import { useEffect, useState } from "react";

const AddText = () => {
  const [beerData, setBeerData] = useState([]);

  // Inline style objects
  const styles = {
    page: {
      fontFamily: "Arial",
      background: "#f7f7f7",
      padding: "20px",
    },
    title: {
      textAlign: "center",
      fontSize: "32px",
      marginBottom: "20px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
      gap: "20px",
    },
    card: {
      background: "#fff",
      padding: "15px",
      borderRadius: "12px",
      boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
      textAlign: "center",
    },
    img: {
      height: "150px",
      objectFit: "contain",
      marginBottom: "10px",
    },
    name: {
      fontSize: "20px",
      fontWeight: "bold",
      marginBottom: "5px",
    },
    tagline: {
      fontSize: "14px",
      color: "gray",
    },
  };
  useEffect(() => {
    const getBeer = async () => {
      const api = await fetch("https://api.punkapi.com/v2/beers");
      const data = await api.json();
      setBeerData(data);
    };
    getBeer();
  }, []);

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>🍺 Beer Store</h1>

      <div style={styles.grid}>
        {beerData.map((beer) => (
          <div key={beer.id} style={styles.card}>
            <img src={beer.image_url} alt={beer.name} style={styles.img} />
            <h2 style={styles.name}>{beer.name}</h2>
            <p style={styles.tagline}>{beer.tagline}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddText;

// const App = () => {

//
// export default App;
