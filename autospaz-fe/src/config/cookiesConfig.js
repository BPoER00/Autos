import cookie from "js-cookie";

export const postCookie = (data) => {
  cookie.set("tokenResAPIAutos", data, {
    expires: 2,
    secure: true,
    sameSite: "strict",
  });
};

export const getCookie = () => {
  return cookie.get("tokenResAPIAutos");
};

export const deleteCookie = () => {
  cookie.set("tokenResAPIAutos", null, {
    expires: 0,
    secure: true,
    sameSite: "strict",
  });
};
