import { useAsyncValue, useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const navigate = useNavigate();

  const navbarStyle = {
    position: "fixed",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#092635",
    padding: "10px",
    borderRadius: "20px",
    textAlign: "center",
    width: "80%", // Adjust the width as needed
  };

  const buttonStyle = {
    padding: "10px 10px",
    fontSize: "1em",
    backgroundColor: "#5C8374", // Example button color
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    margin: "0 10px", // Adjust the spacing between buttons
  };

  return (
    <nav style={navbarStyle}>
      <button onClick={() => navigate("/")} style={buttonStyle}>
        🏩
      </button>
      <button onClick={() => navigate("/about")} style={buttonStyle}>
        😊
      </button>
      <button onClick={() => navigate("/contact")} style={buttonStyle}>
        📞
      </button>
    </nav>
  );
};

export default NavigationBar;
