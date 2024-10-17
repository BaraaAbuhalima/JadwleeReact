import { secondeToClockFormat } from "../utils/helpers";
import { Button } from "@mui/material";
import { TimerButtonProps } from "../utils/PropsType";

const TimerButton = ({
  onClick,
  setMessages,
  setErrorMessages,
  time,
  setTime,
}: TimerButtonProps) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        gap: "10px",
        flexDirection: "column",
      }}
    >
      <Button
        variant="contained"
        style={{
          width: "100%",
        }}
        disabled={time > 0}
        onClick={async () => {
          await onClick(setMessages, setErrorMessages, setTime);
        }}
      >
        Resend
      </Button>
      <div>{time > 0 ? secondeToClockFormat(time) : ""}</div>
    </div>
  );
};

export default TimerButton;
