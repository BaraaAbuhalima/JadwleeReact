export const secondeToClockFormat = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  seconds %= 60;
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");
  return formattedMinutes + ":" + formattedSeconds;
};
export const imageToUrl = (image: Blob) => {
  const url = URL.createObjectURL(image);
  return url;
};
