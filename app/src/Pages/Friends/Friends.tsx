import { Layout } from "../../Components/Layout";
import ProtectedRoute from "../../Components/ProtectedRoute";
import { sessionName } from "../../utils/constants";
import FullBox from "../../Components/FullBox";
import { styled } from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { Link, Outlet } from "react-router-dom";
const CustomLink = styled(Link)({
  margin: "8px", // Optional: add some margin for spacing
  fontSize: "17px",
  textDecoration: "none",
  color: "white",
  width: "150px",
  padding: "15px",
  borderRadius: "5px",
  "&:hover": {
    backgroundColor: "grey",
  },
});

const Friends = () => {
  return (
    <ProtectedRoute cookieName={sessionName}>
      <Layout>
        <FullBox>
          <div
            style={{
              display: "flex",
              gap: "40px",
              padding: "10px",
              paddingLeft: "25px",
              backgroundColor: "#3d63ad",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "20px",
              }}
            >
              <PeopleAltIcon />
              Friends
            </div>
            <CustomLink to={"/user/friends/all"}>All</CustomLink>
            <CustomLink to={"/user/friends/add"}>Add Friend</CustomLink>
            <CustomLink to={"/user/friends/pending"}>Pending</CustomLink>
            <CustomLink to={"/user/friends/requests"}>
              Friend Requests
            </CustomLink>
          </div>
          <div style={{ padding: "15px", paddingTop: "30px" }}>
            <Outlet />
          </div>
        </FullBox>
      </Layout>
    </ProtectedRoute>
  );
};

export default Friends;
