import { useEffect, useState } from "react";
import { SearchBar } from "../../Components/SearchBar";
import { getAllPendingRequests, removeFriend } from "../../api/friends";
import { FriendsType } from "../../utils/Types";
import FriendLabel from "../../Components/FriendLabel";
import { Button } from "@mui/material";

const Pending = () => {
  const [searchFriend, setSearchFriend] = useState<string>("");
  const [allFriends, setAllFriends] = useState<FriendsType[]>([]);
  const [filteredFriends, setFilteredFriends] = useState<FriendsType[]>([]);

  useEffect(() => {
    setSearchFriend(searchFriend.trim().toLowerCase());
  }, [searchFriend]);

  useEffect(() => {
    setFilteredFriends(
      allFriends.filter((friend) => {
        if (searchFriend.charAt(0) === "#") {
          return friend.userNumber
            .toString()
            .startsWith(searchFriend.substring(1));
        }
        return friend.username.includes(searchFriend);
      })
    );
  }, [allFriends, searchFriend]);
  useEffect(() => {
    getAllPendingRequests(setAllFriends);
  }, []);
  return (
    <div>
      <SearchBar
        setSearchValue={setSearchFriend}
        placeHolder="Search by user_number #xxxx or username"
      />
      <div>
        {filteredFriends.map((ele) => (
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              backgroundColor: "gray",
            }}
          >
            <FriendLabel friend={ele}>
              <Button
                onClick={() =>
                  removeFriend(ele.userNumber, setAllFriends, allFriends)
                }
                style={{ color: "red" }}
              >
                Remove
              </Button>
            </FriendLabel>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pending;
