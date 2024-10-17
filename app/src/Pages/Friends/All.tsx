import { useEffect, useState } from "react";
import { SearchBar } from "../../Components/SearchBar";
import { FriendsType } from "../../utils/Types";
import { getAllFriends, removeFriend } from "../../api/friends";
import FriendLabel from "../../Components/FriendLabel";
import { Button } from "@mui/material";

const All = () => {
  const [searchFriend, setSearchFriend] = useState<string>("");
  const [allFriends, setAllFriends] = useState<FriendsType[]>([]);
  const [filteredFriends, setFilteredFriends] = useState<FriendsType[]>([]);

  useEffect(() => {
    getAllFriends(setAllFriends);
  }, []);

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
                style={{ color: "red" }}
                onClick={() =>
                  removeFriend(ele.userNumber, setAllFriends, allFriends)
                }
              >
                remove
              </Button>
            </FriendLabel>
          </div>
        ))}
      </div>
    </div>
  );
};

export default All;
