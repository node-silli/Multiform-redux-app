export const SET_BUILDING = "SET_BUILDING";
export const SET_PINCODE = "SET_PINCODE";
export const SET_FLAT = "SET_FLAT";

export const setBuildingGlobal = (buildingNum) => {
  return {
    type: SET_BUILDING,
    payload: buildingNum,
  };
};

export const setPinCodeGlobal = (pincode) => {
  return {
    type: SET_PINCODE,
    payload: pincode,
  };
};

export const setFlatGlobal = (flatNumber) => {
  return {
    type: SET_FLAT,
    payload: flatNumber,
  };
};
