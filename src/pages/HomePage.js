import React, { useState, useEffect } from "react";

import HeroComponent from "../components/HeroComponent";
import NavigationBar from "../components/NavigationBar";

const HomePage = () => {
  // Prop
  const containerStyle = {
    padding: "5px 30px",
  };

  // Inisialisasi variabel set get
  const [getGantiNama, setGantiNama] = useState("");
  // variabel pacar
  const [getJumlahPacar, setJumlahPacar] = useState(1);
  const [getStatus, setStatus] = useState("");

  // Function Ganti Nama
  const gantiNama = () => {
    setGantiNama("Komang Chandra Winata");
  };

  useEffect(() => {
    if (getJumlahPacar < 0) {
      setStatus("Ngenest");
    } else if (getJumlahPacar === 0) {
      setStatus("Jomblo");
    } else if (getJumlahPacar === 1) {
      setStatus("Green Flag");
    } else if (getJumlahPacar <= 2) {
      setStatus("Red Flag");
    } else if (getJumlahPacar > 3) {
      setStatus("Sorry ya aku mabok, this is cogil");
    }
  }, [getJumlahPacar]);

  return (
    <div style={containerStyle}>
      <NavigationBar />
      <HeroComponent namaBaru={getGantiNama} />
      <button onClick={gantiNama}>Click Me</button>
      <hr></hr>
      <h3>Jumlah pacar saya: {getJumlahPacar}</h3>
      <h3>Status Saya: {getStatus}</h3>
      <button onClick={() => setJumlahPacar((jumlah) => jumlah - 1)}>
        - pacar
      </button>
      <button onClick={() => setJumlahPacar((jumlah) => jumlah + 1)}>
        + pacar
      </button>
    </div>
  );
};

export default HomePage;
