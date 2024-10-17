import { useState } from "react";
import CustomBox from "../Components/CustomBox";
import { Button, TextField } from "@mui/material";
import ErrorMessages from "../Components/ErrorMessages";
import { Link, useNavigate } from "react-router-dom";
import { HTTPErrorMessagesType } from "../utils/Types";
import { handleLoginWithoutPassword } from "../api/auth";

export const ForgotPassword = () => {
  const [email, setEmail] = useState<string>("");
  const [errorMessages, setErrorMessages] =
    useState<HTTPErrorMessagesType>(null);
  // const [messages, setMessages] = useState<string[] | null>(null);
  const navigate = useNavigate();
  return (
    <CustomBox>
      <div>Enter Your Email</div>
      <TextField
        style={{
          width: "100%",
        }}
        id="outlined-basic"
        label="Email"
        variant="outlined"
        onChange={(event) => setEmail(event.target.value)}
      />
      <Button
        variant="contained"
        style={{ width: "100%" }}
        onClick={async () =>
          (await handleLoginWithoutPassword(email, setErrorMessages))
            ? navigate("/login/withoutpassword/verificationcode")
            : null
        }
      >
        Continue
      </Button>
      <ErrorMessages errorMessages={errorMessages} />

      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <Link style={{ textDecoration: "none", color: "blue" }} to="/login">
          Login
        </Link>
        <Link style={{ textDecoration: "none", color: "blue" }} to="/signup">
          Signup
        </Link>
      </div>
    </CustomBox>
  );
};
