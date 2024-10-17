import { Box } from "@mui/material";
import { FriendWrapperProps } from "../utils/PropsType";

const FriendLabel = ({ friend, children }: FriendWrapperProps) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "15px",
        width: "100%",
        padding: "12px",
        alignItems: "center",
        backgroundColor: "#f0f4ff",

        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.4)",
      }}
    >
      <Box
        component="img"
        sx={{
          height: "50px",
          width: "50px",
          border: "2px solid #ddd",
          borderRadius: "50%",
          backgroundColor: "#007acc",
        }}
        alt="Friend's avatar"
        src={friend.image}
      />
      <div style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ fontWeight: "600", fontSize: "16px" }}>
          {friend.displayName}
        </div>
        <div
          style={{ color: "#666", fontSize: "14px" }}
        >{`#${friend.userNumber}`}</div>
        <div style={{ fontSize: "14px", color: "#333" }}>
          Username: {friend.username}
        </div>
      </div>
      {children}
    </div>
  );
};

export default FriendLabel;
