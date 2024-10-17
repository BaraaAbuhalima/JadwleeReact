export interface AuthContextType {
  isAuthenticated: boolean;
}
export interface httpErrorType {
  type: string;
  customStatusCode: number;
  statusCode: number;
  title: string;
  details: string;
  instance: string;
}
interface ErrorMessagesType {
  messageCode: number;
  errors: httpErrorType[];
}
export type HTTPErrorMessagesType = ErrorMessagesType | null;
export interface UserProfileType {
  email: string;
  imageUrl: string;
  displayName: string;
  userNumber: number;
  username: string;
  role: string;
}
export interface FriendsType {
  username: string;
  displayName: string;
  userNumber: string;
  image: string;
}
