import styled from "styled-components";
import { ResponseMessagesProps } from "../utils/PropsType";
const ResponseTheme = styled("div")(() => ({
  color: "green",
  fontSize: "13px",
  textAlign: "left",
}));
const ResponseMessages = ({ messages }: ResponseMessagesProps) => {
  return (
    <ResponseTheme>
      {messages.map((ele) => {
        return <div key={ele}>{`${ele}`}</div>;
      })}
    </ResponseTheme>
  );
};

export default ResponseMessages;
