import { useEffect, useState } from "react";
import CustomBox from "../Components/CustomBox";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { checkIfIsVerified, sendVerificationEmail } from "../api/auth";
import TimerButton from "../Components/TimerButton";
import ErrorMessages from "../Components/ErrorMessages";
import ResponseMessages from "../Components/ResponseMessages";
import { HTTPErrorMessagesType } from "../utils/Types";
import { cookieName } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import ProtectedRoute from "../Components/ProtectedRoute";
const EmailVerification = () => {
  const [errorMessages, setErrorMessages] =
    useState<HTTPErrorMessagesType>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const navigate = useNavigate();
  const [timer, setTimer] = useState<number>(0);
  useEffect(() => {
    sendVerificationEmail(setMessages, setErrorMessages, setTimer);
  }, []);
  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    }
  }, [timer]);
  useEffect(() => {
    const interval = setInterval(async () => {
      if (await checkIfIsVerified()) {
        navigate("/dashboard");
        clearInterval(interval);
      }
    }, 2000);
  }, []);
  return (
    <ProtectedRoute cookieName={cookieName}>
      <CustomBox>
        <CheckCircleOutlineIcon
          sx={{
            color: "green",
            fontSize: "100px",
          }}
        ></CheckCircleOutlineIcon>
        <div
          style={{
            fontSize: "40px",
          }}
        >{`Verify Your Email`}</div>
        <div>A verification link was sent to your email </div>
        <ErrorMessages errorMessages={errorMessages} />
        <TimerButton
          onClick={sendVerificationEmail}
          setMessages={setMessages}
          setErrorMessages={setErrorMessages}
          time={timer}
          setTime={setTimer}
        />
        <ResponseMessages messages={messages}></ResponseMessages>
      </CustomBox>
    </ProtectedRoute>
  );
};

EmailVerification.propTypes = {};

export default EmailVerification;
