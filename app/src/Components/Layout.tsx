import Nav from "./nav/Nav";
import { LayoutProps } from "../utils/PropsType";
import FullBox from "./FullBox";

export const Layout = ({ children }: LayoutProps) => {
  return (
    <FullBox
      style={{
        display: "flex",
        height: "100%",
        minWidth: "100vw",
        minHeight: "100vh",
        justifyContent: "left",
        backgroundColor: "#f0f0f0",
      }}
    >
      <Nav></Nav>
      <div
        style={{
          minWidth: "200px",
          minHeight: "100%",
        }}
      ></div>
      {children}
    </FullBox>
  );
};
