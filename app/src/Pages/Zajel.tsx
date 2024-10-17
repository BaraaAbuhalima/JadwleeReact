import { Button, Divider, TextField } from "@mui/material";
import { Layout } from "../Components/Layout";
import { ProfileLabel } from "../utils/styledComponents";
import styled from "styled-components";
import FullBox from "../Components/FullBox";
import { styled as muiStyled } from "@mui/material";
import { useState } from "react";
import { HTTPErrorMessagesType } from "../utils/Types";
import { changeZajelId, changeZajelPassword } from "../api/Zajel";
import ResponseMessages from "../Components/ResponseMessages";
import ErrorMessages from "../Components/ErrorMessages";

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
const Title = styled.div`
  font-size: 48px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ScheduleContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  gap: 20px;
`;

const Zajel = () => {
  const [zajelID, setZajelID] = useState<string>("");
  const [zajelPassword, setZajelPassword] = useState<string>("");
  const [errorMessages, setErrorMessages] =
    useState<HTTPErrorMessagesType>(null);
  const [responseMessages, setResponseMessages] = useState<string[]>([]);
  return (
    <Layout>
      <FullBox
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "100%",
          padding: "30px",
          minHeight: "fit-content",
        }}
      >
        <Title>Zajel</Title>
        <ScheduleContainer>
          <LabeledInput>
            <ProfileLabel htmlFor="zajelID">Zajel ID</ProfileLabel>
            <InputContainer>
              <TextField
                sx={{ width: "200px" }}
                id="zajelID"
                variant="outlined"
                onChange={(event) => {
                  setZajelID(event.target.value);
                }}
              />
              <Button
                onClick={() => {
                  changeZajelId(zajelID, setErrorMessages, setResponseMessages);
                }}
                variant="contained"
              >
                Change
              </Button>
            </InputContainer>
          </LabeledInput>
          <LabeledInput>
            <ProfileLabel htmlFor="zajelPassword">Zajel Password</ProfileLabel>
            <InputContainer>
              <TextField
                sx={{ width: "200px" }}
                id="zajelPassword"
                variant="outlined"
                type="password"
                autoComplete="off"
                onChange={(event) => {
                  setZajelPassword(event.target.value);
                }}
              />
              <Button
                onClick={() => {
                  changeZajelPassword(
                    zajelPassword,
                    setErrorMessages,
                    setResponseMessages
                  );
                }}
                variant="contained"
              >
                Change
              </Button>
            </InputContainer>
          </LabeledInput>
        </ScheduleContainer>
        <ResponseMessages messages={responseMessages} />
        <ErrorMessages errorMessages={errorMessages} />
        <Button>Check Zajel Id and password</Button>
        <Line>
          <Divider style={{ color: "grey" }}></Divider>
        </Line>
        <Title>Break CloudFlare Protection</Title>

        <Button>Break CloudFlare Protection</Button>
      </FullBox>
    </Layout>
  );
};

export default Zajel;
