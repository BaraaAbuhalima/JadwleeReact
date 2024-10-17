import {
  Box,
  Divider,
  styled as muiStyled,
  TextField,
  Input,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import FullBox from "../Components/FullBox";
import ProtectedRoute from "../Components/ProtectedRoute";
import { domain, sessionName } from "../utils/constants";
import { Layout } from "../Components/Layout";
import { getProfile, getProfileImage, updatePhoto } from "../api/profile";
import { HTTPErrorMessagesType, UserProfileType } from "../utils/Types";
import { ProfileLabel } from "../utils/styledComponents";
import ErrorMessages from "../Components/ErrorMessages";
import styled from "styled-components";
import ResponseMessages from "../Components/ResponseMessages";
const Line = muiStyled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  "& > :not(style) ~ :not(style)": {
    marginTop: theme.spacing(2),
  },
}));
const LabeledInput = styled.div`
  align-items: center;
  gap: 10px;
  display: flex;
`;
const SubTitle = styled.div`
  font-size: 20px;
  padding: "20px";
  color: #555; /* Lighter color for subtitle */
`;
const Profile = () => {
  const [responseMessages, setResponseMessages] = useState<string[]>([]);
  const [profile, setProfile] = useState<UserProfileType>({
    email: "",
    imageUrl: "string",
    displayName: "",
    userNumber: 999999999,
    username: "",
    role: "",
  });
  const [formData, setFormData] = useState({
    displayName: "",
    password: "",
    confirmedPassword: "",
  });
  const [errorMessages, setErrorMessages] =
    useState<HTTPErrorMessagesType>(null);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    console.log(id);
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  useEffect(() => {
    getProfileImage(setProfile);
    getProfile(setProfile);
  }, []);

  const handlePasswordChange = async () => {
    console.log(formData);
    const response = await fetch(domain + "/api/user/changePassword", {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      console.log("error");
      setErrorMessages(await response.json());
      return;
    }
    setResponseMessages(await response.json());
    setErrorMessages(null);
  };
  const handleProfileChange = async () => {
    console.log(formData);
    const response = await fetch(domain + "/api/user/changeDisplayName", {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      console.log("error");
      setErrorMessages(await response.json());
      return;
    }
    setErrorMessages(null);
    const { displayName } = await response.json();
    setProfile((prevData) => ({
      ...prevData,
      displayName,
    }));
  };
  return (
    <ProtectedRoute cookieName={sessionName}>
      <Layout>
        <FullBox
          style={{
            padding: "50px",
            backgroundColor: "white",
            alignItems: "flex-start",
            width: "100%",
            minHeight: "fit-content",
          }}
        >
          <div
            style={{
              height: "300px",
              width: "100%",
              display: "flex",
              gap: "70px",
              alignItems: "center",
              paddingTop: "50px",
              paddingBottom: "50px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Box
                component="img"
                sx={{
                  height: 200,
                  width: 200,
                  border: "2px solid grey",
                  borderRadius: "50%",
                }}
                alt="The house from the offer."
                src={profile.imageUrl}
              ></Box>
              <Input
                type="file"
                inputProps={{ accept: "image/*" }}
                style={{ width: "200px" }}
                onChange={(event) => {
                  const photo = (event.target as HTMLInputElement).files?.[0];
                  if (photo) updatePhoto(photo, setErrorMessages, setProfile);
                }}
              />
            </div>
            <div
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{ fontSize: "40px" }}
              >{`${profile.displayName} `}</div>
              <SubTitle>{`${profile.email} - ${profile.role}`}</SubTitle>
              <SubTitle>{`Username: ${profile.username}`}</SubTitle>
              <SubTitle>{`User Number: #${profile.userNumber}`}</SubTitle>
            </div>
          </div>
          <div style={{ width: "100%", textAlign: "left", fontSize: "30px" }}>
            Account
          </div>
          <Line>
            <Divider style={{ color: "grey" }}></Divider>
          </Line>
          <ErrorMessages errorMessages={errorMessages}></ErrorMessages>
          <ResponseMessages messages={responseMessages}></ResponseMessages>
          <form
            onSubmit={() => {}}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "50px",
              gap: "40px",
            }}
          >
            <LabeledInput>
              <ProfileLabel htmlFor="email">Email </ProfileLabel>
              <TextField
                sx={{ width: "300px" }}
                value={profile.email}
                id="email"
                disabled
              ></TextField>
            </LabeledInput>
            <LabeledInput>
              <ProfileLabel htmlFor="displayName">Display Name </ProfileLabel>

              <TextField
                sx={{ width: "300px" }}
                id="displayName"
                placeholder={profile.displayName}
                onChange={handleChange}
              ></TextField>
              <Button onClick={handleProfileChange} variant="contained">
                Save{" "}
              </Button>
            </LabeledInput>

            <LabeledInput>
              <ProfileLabel htmlFor="password">New Password </ProfileLabel>

              <TextField
                sx={{ width: "300px" }}
                id="password"
                type="Password"
                onChange={handleChange}
              ></TextField>
            </LabeledInput>

            <LabeledInput>
              <ProfileLabel htmlFor="confirmedPassword">
                Confirmed Password
              </ProfileLabel>

              <TextField
                sx={{ width: "300px" }}
                type="Password"
                id="confirmedPassword"
                onChange={handleChange}
              ></TextField>
              <Button onClick={handlePasswordChange} variant="contained">
                Save{" "}
              </Button>
            </LabeledInput>
          </form>
        </FullBox>
      </Layout>
    </ProtectedRoute>
  );
};

export default Profile;
