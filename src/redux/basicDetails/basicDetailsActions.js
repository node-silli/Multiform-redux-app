export const SET_FULLNAME = "SET_FULLNAME";
export const SET_EMAIL = "SET_EMAIL";
export const SET_PHONENUMBER = "SET_PHONENUMBER";

export const setFullName = (fullname) => {
  return {
    type: SET_FULLNAME,
    payload: fullname,
  };
};

export const setEmail = (mail) => {
  return {
    type: SET_EMAIL,
    payload: mail,
  };
};

export const setPhoneNumber = (num) => {
  return {
    type: SET_PHONENUMBER,
    payload: num,
  };
};
