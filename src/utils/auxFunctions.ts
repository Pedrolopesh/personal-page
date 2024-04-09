export const stringToBoolean = (string?: string) => {
  if (string === undefined) {
    console.log("string if => ", string);
    return false;
  }

  if (string === "true") {
    return true;
  }

  return false;
};
