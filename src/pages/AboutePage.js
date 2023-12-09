import { Container } from "react-bootstrap";

import CardProduc from "../components/CardProduc";
import NavigationBar from "../components/NavigationBar";

const AboutPage = () => {
  const containerStyle = {
    padding: "5px 30px",
  };

  return (
    <div style={containerStyle}>
      <NavigationBar />
      <CardProduc />
    </div>
  );
};

export default AboutPage;
