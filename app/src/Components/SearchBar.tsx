import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { SearchBarProps } from "../utils/PropsType";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
export const SearchBar = ({
  style,
  setSearchValue,
  placeHolder,
}: SearchBarProps) => {
  const [hasText, setHasText] = useState<boolean>(false);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        border: "1px solid black",
        width: "100%",
        padding: "5px",
        paddingLeft: "10px",
        paddingRight: "10px",
        ...style,
      }}
    >
      <InputBase
        style={{ width: "100%" }}
        placeholder={placeHolder}
        onChange={(event) => {
          setSearchValue(event.target.value);
          setHasText(event.target.value.length > 0);
        }}
      />
      <div>
        {!hasText ? (
          <SearchIcon sx={{ display: "flex", alignItems: "center" }} />
        ) : (
          <CloseIcon sx={{ display: "flex", alignItems: "center" }} />
        )}
      </div>
    </div>
  );
};
