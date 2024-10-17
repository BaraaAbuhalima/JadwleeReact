import { domain } from "../utils/constants";
import { HTTPErrorMessagesType } from "../utils/Types";
export const handleGoogleAuth = () => {
  window.location.href = "http://localhost:3000/api/auth/google";
};

export const handleLogin = async (
  email: string,
  password: string,
  setErrorMessages: (errors: HTTPErrorMessagesType) => void
) => {
  try {
    const response = await fetch(domain + "/api/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    if (!response.ok) {
      const errors = await response.json();
      setErrorMessages(errors);
      return errors.messageCode;
    }

    setErrorMessages(null);
    return 200;
  } catch (err) {
    console.log(err);
  }
};
export const handleSignUp = async (
  username: string,
  email: string,
  password: string,
  confirmedPassword: string,
  displayName: string,
  setErrorMessages: (errors: HTTPErrorMessagesType) => void
) => {
  try {
    const response = await fetch("http://localhost:3000/api/signup", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        confirmedPassword: confirmedPassword,
        email: email,
        displayName: displayName,
      }),
    });
    if (!response.ok) {
      const errors = await response.json();
      setErrorMessages(errors);
      throw new Error();
    }

    setErrorMessages(null);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
export const getEmail = async (setEmail: (email: string) => void) => {
  const response = await fetch("http://localhost:3000/api/signup/getEmail", {
    method: "GET",

    credentials: "include",
  });
  if (response.ok) {
    const email = await response.json();
    setEmail(email.email);
    return;
  }
};
export const handleLoginWithoutPassword = async (
  email: string,
  setErrorMessages: (errors: HTTPErrorMessagesType) => void
) => {
  try {
    const response = await fetch(domain + "/api/login/withoutpassword", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
      credentials: "include",
    });
    if (!response.ok) {
      const errors = await response.json();
      setErrorMessages(errors);
      throw new Error();
    }
    setErrorMessages(null);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
export const handleLoginWithoutPasswordVerification = async (
  verificationCode: string,
  setErrorMessages: (errors: HTTPErrorMessagesType) => void
) => {
  try {
    const response = await fetch(
      domain + "/api/login/withoutpassword/checkVerificationCode",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ verificationCode: verificationCode }),
        credentials: "include",
      }
    );
    if (!response.ok) {
      const errors = await response.json();
      setErrorMessages(errors);
      return false;
    }
    setErrorMessages(null);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
export const sendVerificationCodeOnEmail = async (
  setMessages: (messages: string[]) => void,
  setErrorMessages: (errors: HTTPErrorMessagesType) => void,
  setTimer: (time: number) => void
) => {
  const response = await fetch(
    domain + "/api/login/withoutpassword/getVerificationCode",
    {
      method: "GET",
      credentials: "include",
    }
  );
  const resp = await response.json();
  if (!response.ok) {
    setErrorMessages(resp.messages);
    setMessages([]);
    setTimer(resp.time);
    return false;
  }
  setErrorMessages(null);
  setTimer(resp.time);
  setMessages(resp.messages);
  return true;
};
export const sendVerificationEmail = async (
  setMessages: (messages: string[]) => void,
  setErrorMessages: (errors: HTTPErrorMessagesType) => void,
  setTimer: (time: number) => void
) => {
  const response = await fetch(domain + "/api/signup/getVerificationEmail", {
    method: "GET",
    credentials: "include",
  });
  const resp = await response.json();
  if (!response.ok) {
    setErrorMessages(resp.messages);
    setMessages([]);
    setTimer(resp.time);
    return false;
  }
  setErrorMessages(null);
  setTimer(resp.time);
  setMessages(resp.messages);
  return true;
};
export const checkIfIsVerified = async () => {
  const response = await fetch(domain + "/api/signup/isVerified", {
    method: "GET",
    credentials: "include",
  });
  if (!response.ok) {
    return false;
  }
  return true;
};
export const logout = async () => {
  const response = await fetch(domain + "/api/user/logout", {
    method: "GET",
    credentials: "include",
  });
  console.log(response.ok);
};
