import { TextField, Button, Divider, styled } from "@mui/material";
import { useState } from "react";
import ErrorMessages from "../Components/ErrorMessages";
import { Link, useNavigate } from "react-router-dom";
import CustomBox from "../Components/CustomBox";
import { handleLogin } from "../api/auth";
import GoogleAuth20 from "../Components/GoogleAuth20";
import { HTTPErrorMessagesType } from "../utils/Types";
const Line = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  "& > :not(style) ~ :not(style)": {
    marginTop: theme.spacing(2),
  },
}));
const SignUp = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessages, setErrorMessages] =
    useState<HTTPErrorMessagesType>(null);
  const navigate = useNavigate();

  return (
    <CustomBox>
      <div style={{ color: "black", fontSize: "40px", fontWeight: "600" }}>
        Login
      </div>
      <TextField
        style={{
          width: "100%",
        }}
        id="outlined-basic"
        label="Email"
        variant="outlined"
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextField
        style={{
          width: "100%",
        }}
        id="outlined-password-input"
        label="Password"
        type="Password"
        variant="outlined"
        onChange={(event) => setPassword(event.target.value)}
      />
      <ErrorMessages errorMessages={errorMessages} />
      <Link
        style={{ textDecoration: "none", color: "blue", fontSize: "15px" }}
        to="/login/withoutpassword"
      >
        Login Without Password
      </Link>
      <Button
        variant="contained"
        style={{ width: "100%" }}
        onClick={async () => {
          const messageCode = await handleLogin(
            email,
            password,
            setErrorMessages
          );
          console.log(errorMessages);
          if (messageCode === 200) navigate("/dashboard");
          else if (messageCode === 4000) navigate("/user/verification");
        }}
      >
        Login
      </Button>
      <div>
        Don't have an account?
        <Link style={{ textDecoration: "none", color: "blue" }} to="/signup">
          Signup
        </Link>
      </div>
      <Line>
        <Divider style={{ color: "grey" }}>Or</Divider>
      </Line>
      <GoogleAuth20 />
    </CustomBox>
  );
};

export default SignUp;
