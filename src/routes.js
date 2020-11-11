/*
  Kalo nambah route disini ya, caranya gini :
    1. Import component2nya
    2. Masukin ke array APP_ROUTE, private itu berarti routenya cuman bisa diliat kalo udah login,
       restricted itu berarti routenya gak bisa diliat kalo udah login (Misal kalo aku masuk 
        halaman login padal udah login)
*/

import Login from "pages/Login/Login";
import Home from "pages/Home";
import Main from "pages/main";
import Dashboard from "pages/Dashboard/Dashboard";
import AccountPage from "pages/AccountPage/AccountPage";
import Product from "pages/Product";
import Partner from "pages/Partner";

export const APP_ROUTE = [
  {
    name: "Login",
    path: "/login",
    exact: true,
    component: Login,
    restricted: false,
  },
  {
    name: "Home",
    path: "/home",
    exact: true,
    component: Home,
    restricted: true,
    private: true,
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    exact: true,
    component: Dashboard,
    restricted: true,
    private: true,
  },
  {
    name: "AccountPage",
    path: "/accountPage",
    exact: true,
    component: AccountPage,
    restricted: true,
    private: true,
  },

  {
    name: "Product",
    path: "/product",
    exact: true,
    component: Product,
    restricted: true,
    private: true,
  },  

  {
    name: "Partner",
    path: "/partner",
    exact: true,
    component: Partner,
    restricted: true,
    private: true,
  }, 
];
