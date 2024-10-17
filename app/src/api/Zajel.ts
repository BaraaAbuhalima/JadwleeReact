import { domain } from "../utils/constants";
import { HTTPErrorMessagesType } from "../utils/Types";

export const changeZajelId = async (
  zajelID: string,
  setErrorMessages: (errors: HTTPErrorMessagesType) => void,
  setResponseMessages: (messages: string[]) => void
) => {
  const response = await fetch(domain + "/api/user/zajel/id", {
    method: "POST",
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ zajelID }),
  });
  setErrorMessages(null);
  setResponseMessages([]);
  if (!response.ok) {
    return setErrorMessages(await response.json());
  }
  return setResponseMessages(await response.json());
};
export const changeZajelPassword = async (
  zajelPassword: string,
  setErrorMessages: (errors: HTTPErrorMessagesType) => void,
  setResponseMessages: (messages: string[]) => void
) => {
  const response = await fetch(domain + "/api/user/zajel/password", {
    method: "POST",
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ zajelPassword }),
  });
  setErrorMessages(null);
  setResponseMessages([]);
  if (!response.ok) {
    return setErrorMessages(await response.json());
  }
  return setResponseMessages(await response.json());
};
