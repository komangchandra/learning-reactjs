const HeroComponent = ({ namaBaru }) => {
  return (
    <div>
      <h1>{!namaBaru ? "Komang Chandra" : namaBaru}</h1>
      <p>FrontEnd Developer Handal</p>
    </div>
  );
};

export default HeroComponent;
