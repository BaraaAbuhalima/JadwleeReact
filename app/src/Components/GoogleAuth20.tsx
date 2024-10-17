import { Button } from "@mui/material";
import { handleGoogleAuth } from "../api/auth";
import GoogleLogo from "../assets/GoogleLogo.png";
const GoogleAuth20 = () => {
  return (
    <Button
      variant="contained"
      style={{
        width: "100%",
        display: "flex",
        gap: "15px",
        backgroundColor: "white",
        color: "black",
      }}
      onClick={() => {
        handleGoogleAuth();
      }}
    >
      <img src={GoogleLogo} alt="" width="25" height="100%" />
      Continue With Google
    </Button>
  );
};

export default GoogleAuth20;
