import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CreateDonate from "../views/CreateDonate";
import Donate from "../views/Donate";
import DonateStatus from "../views/DonateStatus";
import Login from "../views/Login";
import Logout from "../views/Logout";
import Register from "../views/Register";
import UserHome from "../views/UserHome";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/CreateDonate",
    name: "CreateDonate",
    component: CreateDonate
  },
  {
    path: "/Donate",
    name: "Donate",
    component: Donate
  },
  {
    path: "/DonateStatus",
    name: "DonateStatus",
    component: DonateStatus
  },
  {
    path: "/Login",
    name: "Login",
    component: Login
  },
  {
    path: "/Logout",
    name: "Logout",
    component: Logout
  },
  {
    path: "/Register",
    name: "Register",
    component: Register
  },
  {
    path: "/UserHome",
    name: "UserHome",
    component: UserHome
  },
];

export const router = new VueRouter({
  mode: 'history',
  routes
})



