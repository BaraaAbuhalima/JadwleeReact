import CustomBox from "../Components/CustomBox";
import ErrorMessages from "../Components/ErrorMessages";
import VerificationInput from "react-verification-input";
// import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import "../css/VerificationInput.css";
// import { ErrorMessagesType } from "../utils/Types";
import {
  handleLoginWithoutPasswordVerification,
  sendVerificationCodeOnEmail,
} from "../api/auth";
import { HTTPErrorMessagesType } from "../utils/Types";
import TimerButton from "../Components/TimerButton";
import ResponseMessages from "../Components/ResponseMessages";
import { useNavigate } from "react-router-dom";
import ProtectedRoute from "../Components/ProtectedRoute";
import { cookieName } from "../utils/constants";

const VerificationCode = () => {
  const [errorMessages, setErrorMessages] =
    useState<HTTPErrorMessagesType>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const navigate = useNavigate();
  const [time, setTime] = useState<number>(0);
  useEffect(() => {
    sendVerificationCodeOnEmail(setMessages, setErrorMessages, setTime);
  }, []);
  useEffect(() => {
    if (time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [time]);
  return (
    <ProtectedRoute cookieName={cookieName}>
      <CustomBox>
        <div>Enter 6-digits Code</div>
        <VerificationInput
          placeholder=""
          autoFocus
          validChars="0-9"
          length={6}
          onComplete={async (value) => {
            const response = await handleLoginWithoutPasswordVerification(
              value,
              setErrorMessages
            );
            if (response) navigate("/dashboard");

            console.log(value);
          }}
          classNames={{
            container: "container",
            character: "character",
            characterInactive: "character--inactive",
            characterSelected: "character--selected",
            characterFilled: "character--filled",
          }}
        />
        <ErrorMessages errorMessages={errorMessages} />
        <TimerButton
          onClick={sendVerificationCodeOnEmail}
          setMessages={setMessages}
          setErrorMessages={setErrorMessages}
          time={time}
          setTime={setTime}
        />
        <ResponseMessages messages={messages}></ResponseMessages>
      </CustomBox>
    </ProtectedRoute>
  );
};

export default VerificationCode;
