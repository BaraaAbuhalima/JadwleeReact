import { domain } from "../utils/constants";
import { imageToUrl } from "../utils/helpers";
import { HTTPErrorMessagesType, UserProfileType } from "../utils/Types";

export const updatePhoto = async (
  photo: File,
  setErrorMessages: (errors: HTTPErrorMessagesType) => void,
  setProfile: (fun: (profile: UserProfileType) => UserProfileType) => void
) => {
  const formData = new FormData();
  formData.append("photo", photo);
  const response = await fetch(domain + "/api/user/updateProfilePicture", {
    method: "PATCH",

    credentials: "include",
    body: formData,
  });
  if (!response.ok) {
    setErrorMessages(await response.json());
  }
  const url = imageToUrl(await response.blob());
  setErrorMessages(null);
  console.log(url);
  setProfile((prevData) => ({
    ...prevData,
    imageUrl: url,
  }));
};
export const getProfileImage = async (
  setProfile: (fun: (profile: UserProfileType) => UserProfileType) => void
) => {
  const response = await fetch(domain + "/api/user/profilePicture", {
    method: "GET",
    credentials: "include",
  });
  const blob = await response.blob();
  const url = URL.createObjectURL(blob);

  setProfile((prevData) => ({
    ...prevData,
    imageUrl: url,
  }));
};
export const getProfile = async (
  setProfile: (fun: (profile: UserProfileType) => UserProfileType) => void
) => {
  const response = await fetch(domain + "/api/user/profile", {
    method: "GET",
    credentials: "include",
  });
  if (response.ok) {
    const profile = await response.json();
    setProfile((prevData) => ({
      ...prevData,
      ...profile,
    }));
    console.log(profile);
  }
};
