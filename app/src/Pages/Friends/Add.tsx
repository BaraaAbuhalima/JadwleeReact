import { useEffect, useState } from "react";
import { SearchBar } from "../../Components/SearchBar";
import { Button } from "@mui/material";
import ResponseMessages from "../../Components/ResponseMessages";
import { sendFriendRequest } from "../../api/friends";
import ErrorMessages from "../../Components/ErrorMessages";
import { HTTPErrorMessagesType } from "../../utils/Types";

const Add = () => {
  const [searchFriend, setSearchFriend] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]);
  const [errorMessages, setErrorMessages] =
    useState<HTTPErrorMessagesType>(null);
  useEffect(() => {
    setSearchFriend(searchFriend.trim().toLowerCase());
  }, [searchFriend]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "40px",
        alignItems: "center",
      }}
    >
      <SearchBar
        setSearchValue={setSearchFriend}
        placeHolder="Search by user_number #xxxx "
      />
      <Button
        onClick={() =>
          sendFriendRequest(searchFriend, setMessages, setErrorMessages)
        }
        style={{ width: "50%" }}
        variant="contained"
      >
        Send
      </Button>
      <ResponseMessages messages={messages} />
      <ErrorMessages errorMessages={errorMessages}></ErrorMessages>
    </div>
  );
};

export default Add;
