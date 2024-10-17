import { domain } from "../utils/constants";
import { FriendsType, HTTPErrorMessagesType } from "../utils/Types";

export const getAllFriends = async (
  setFriends: (friends: FriendsType[]) => void
) => {
  const response = await fetch(domain + "/api/user/friends/all", {
    method: "GET",
    credentials: "include",
  });
  if (!response.ok) {
    console.log("err");
  }
  const friends = await response.json();
  setFriends(friends);
};
export const removeFriend = async (
  userNumber: string,
  setAllFriends: (friends: FriendsType[]) => void,
  friends: FriendsType[]
) => {
  const response = await fetch(
    domain + "/api/user/removeFriend/" + userNumber,
    {
      method: "POST",
      credentials: "include",
    }
  );
  if (!response.ok) {
    console.log("hello");
  }
  setAllFriends(
    friends.filter((ele) => {
      return ele.userNumber !== userNumber;
    })
  );
};
export const sendFriendRequest = async (
  searchValue: string,
  setMessages: (messages: string[]) => void,
  setErrorMessages: (errMessage: HTTPErrorMessagesType) => void
) => {
  if (searchValue.startsWith("#")) {
    searchValue = searchValue.substring(1);
  }
  const response = await fetch(
    domain + "/api/user/friends/add/" + searchValue,
    {
      method: "POST",
      credentials: "include",
    }
  );
  if (!response.ok) {
    setErrorMessages(await response.json());
    return console.log("err");
  }
  setMessages(await response.json());
};
export const getAllPendingRequests = async (
  setAllFriends: (friends: FriendsType[]) => void
) => {
  const response = await fetch(domain + "/api/user/friends/pending", {
    method: "GET",
    credentials: "include",
  });
  if (!response.ok) {
    console.log("err");
  }
  setAllFriends(await response.json());
};
export const addFriend = async (
  userNumber: string,
  setAllFriends: (friends: FriendsType[]) => void,
  friends: FriendsType[]
) => {
  const response = await fetch(
    domain + "/api/user/friend/accept/" + userNumber,
    {
      method: "POST",
      credentials: "include",
    }
  );
  if (!response.ok) {
    console.log("err");
  }
  setAllFriends(friends.filter((ele) => ele.userNumber !== userNumber));
};

export const getAllFriendRequests = async (
  setAllFriends: (friends: FriendsType[]) => void
) => {
  const response = await fetch(domain + "/api/user/friends/requests", {
    method: "GET",
    credentials: "include",
  });
  if (!response.ok) {
    console.log("err");
  }
  setAllFriends(await response.json());
};
