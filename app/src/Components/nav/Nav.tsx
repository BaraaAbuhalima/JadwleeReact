import HomeIcon from "@mui/icons-material/Home";
import { NavLink } from "../../utils/styledComponents";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Person2Icon from "@mui/icons-material/Person2";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LanguageIcon from "@mui/icons-material/Language";
import LogoutIcon from "@mui/icons-material/Logout";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";
import { logout } from "../../api/auth";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
const nav = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "30px",
        color: "white",
        backgroundColor: "#00c2b5",
        padding: "15px",
        minHeight: "100%",
        minWidth: "200px",
        position: "fixed",
      }}
    >
      <NavLink to={"/home"}>
        <HomeIcon />
        Home
      </NavLink>
      <NavLink to={"/dashboard"}>
        <DashboardIcon />
        Dashboard
      </NavLink>
      <NavLink to={"/schedule"}>
        <ImportContactsIcon />
        Schedule
      </NavLink>
      <NavLink to={"/zajel"}>
        <ImportContactsIcon />
        Zajel
      </NavLink>

      <NavLink to={"/profile"}>
        <Person2Icon />
        Profile
      </NavLink>

      <NavLink to={"/user/friends"}>
        <PersonAddIcon />
        Friends
      </NavLink>
      <NavLink to={"/feedback"}>
        <SendIcon />
        Send FeedBack
      </NavLink>
      <NavLink to={"/contactUs"}>
        <EmailIcon />
        Contact Us
      </NavLink>
      <NavLink to={"/language"}>
        <LanguageIcon />
        Language
      </NavLink>
      <NavLink to={"/login"} onClick={logout}>
        <LogoutIcon />
        Logout
      </NavLink>
    </div>
  );
};

export default nav;
