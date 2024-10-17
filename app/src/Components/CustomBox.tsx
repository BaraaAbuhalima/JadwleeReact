import { Box } from "@mui/material";
import { CustomBoxProps } from "../utils/PropsType";

const CustomBox = ({ children }: CustomBoxProps) => {
  return (
    <Box
      component="form"
      sx={{
        backgroundColor: "white",
        width: "450px",
        height: "auto",
        padding: "30px",
        borderRadius: "10px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "25px",
      }}
      noValidate
      autoComplete="off"
    >
      {children}
    </Box>
  );
};

export default CustomBox;
