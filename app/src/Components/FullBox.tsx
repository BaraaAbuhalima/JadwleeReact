import { FullBoxProps } from "../utils/PropsType";

const FullBox = ({ style, children }: FullBoxProps) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "fit-content",
        width: "100%",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default FullBox;
