import { TextField, Button, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ErrorMessages from "../Components/ErrorMessages";
import CustomBox from "../Components/CustomBox";
import { handleSignUp } from "../api/auth";
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
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmedPassword, setConfirmedPassword] = useState<string>("");
  const [displayName, setDisplayName] = useState<string>("");
  const [errorMessages, setErrorMessages] =
    useState<HTTPErrorMessagesType>(null);
  const navigate = useNavigate();
  return (
    <CustomBox>
      <div style={{ color: "black", fontSize: "40px", fontWeight: "600" }}>
        SignUp
      </div>
      <TextField
        style={{
          width: "100%",
        }}
        label="Email"
        variant="outlined"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <TextField
        style={{
          width: "100%",
        }}
        label="Username"
        variant="outlined"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <TextField
        style={{
          width: "100%",
        }}
        label="Display Name"
        variant="outlined"
        onChange={(event) => {
          setDisplayName(event.target.value);
        }}
      />
      <TextField
        style={{
          width: "100%",
        }}
        label="Password"
        type="Password"
        variant="outlined"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <TextField
        style={{
          width: "100%",
        }}
        label="Confirm Password"
        type="Password"
        variant="outlined"
        onChange={(event) => {
          setConfirmedPassword(event.target.value);
        }}
      />
      <ErrorMessages errorMessages={errorMessages} />
      <Button
        variant="contained"
        style={{
          width: "100%",
        }}
        onClick={async () =>
          (await handleSignUp(
            username,
            email,
            password,
            confirmedPassword,
            displayName,
            setErrorMessages
          ))
            ? navigate("/user/verification")
            : null
        }
      >
        SignUp
      </Button>
      <div>
        Already have an account?
        <Link style={{ textDecoration: "none", color: "blue" }} to="/login">
          Login
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
