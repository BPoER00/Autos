import cookie from "js-cookie";

export const postCookie = (data) => {
  cookie.set("pgDataAutosCookie", data, {
    expires: 1,
    secure: true,
    sameSite: "strict",
  });
};

export const getCookie = () => {
  return cookie.get("pgDataAutosCookie");
};

export const deleteCookie = () => {
  cookie.set("pgDataAutosCookie", null, {
    expires: 0,
    secure: true,
    sameSite: "strict",
  });
};
