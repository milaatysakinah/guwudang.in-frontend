/*
  Ini utils auth, tujuannya buat ngecek di localstorage ada item "USER" apa nggak. Btw nanti
  kalo misal nyimpen token atau yg sensitif2 gitu pake cookies aja lho ya. Kalo sekedar data
  kayak nama user di localStorage aja gpp
*/
import Cookies from "js-cookie";

export const login = (user) => {
  Cookies.set("USER", user.token)
  //localStorage.setItem("USER", user.token);
};

export const id = (user) => {
  localStorage.setItem("ID", user.id);
};

export const logout = () => {
  Cookies.remove("USER");
  localStorage.removeItem("ID");
};

export const isLogin = () => {
  if (Cookies.get("USER")) {
    return true;
  }
  return false;
};
