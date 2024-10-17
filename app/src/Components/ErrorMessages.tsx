import { styled } from "styled-components";
import { ErrorMessagesProps } from "../utils/PropsType";

const ErrorTheme = styled("div")(() => ({
  color: "red",
  fontSize: "12px",
  textAlign: "left",
}));
const ErrorMessages = ({ errorMessages }: ErrorMessagesProps) => {
  return (
    <div
      style={{
        width: "100%",
        display: "block",
        alignItems: "left",
      }}
    >
      {errorMessages?.errors?.map((ele, idx) => {
        return (
          <ErrorTheme key={`${ele}${idx}`}>{`* ${ele.title}`} </ErrorTheme>
        );
      })}
    </div>
  );
};
export default ErrorMessages;
