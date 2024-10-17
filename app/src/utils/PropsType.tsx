import { ReactNode } from "react";
import { FriendsType, HTTPErrorMessagesType } from "./Types";
export interface ProtectedRouteProps {
  children: ReactNode;
  cookieName: string;
}
export interface AuthProviderProps {
  children: ReactNode;
}
export interface ErrorMessagesProps {
  errorMessages: HTTPErrorMessagesType;
}
export interface CustomBoxProps {
  children: ReactNode;
}
export interface EmailVerificationProps {
  email: string;
}
export interface ResponseMessagesProps {
  messages: string[];
}
export interface TimerButtonProps {
  onClick: (
    setMessages: (messages: string[]) => void,
    setErrorMessages: (errors: HTTPErrorMessagesType) => void,
    setTime: (time: number) => void
  ) => Promise<boolean>;
  setMessages: (messages: string[]) => void;
  setErrorMessages: (errors: HTTPErrorMessagesType) => void;
  time: number;
  setTime: (time: number) => void;
}
export interface FullBoxProps {
  style?: React.CSSProperties;
  children: ReactNode;
}
export interface LayoutProps {
  children: ReactNode;
}
export interface SearchBarProps {
  style?: React.CSSProperties;
  placeHolder?: string;
  setSearchValue: (value: string) => void;
}
export interface FriendWrapperProps {
  friend: FriendsType;
  children?: ReactNode;
}
