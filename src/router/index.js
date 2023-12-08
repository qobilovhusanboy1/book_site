import { layoutMiddleware } from "./middleware";
import { createRouter, createWebHistory } from "vue-router";

import store from "../store";
import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";
import Dashboard from "../pages/Dashboard.vue"
import { RT_HOME, MT_HOME, RT_LOGIN, MT_LOGIN, RT_404, MT_404, RT_DASHBOARD, MT_DASHBOARD,RT_PROFILE ,MT_PROFILE, RT_ADMINVIEW , MT_ADMINVIEW } from "../constants/routeNames";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/login",
      name: RT_LOGIN,
      component: Login,
      meta: {
        layout: "Auth",
        title: MT_LOGIN,
      },
    },
    {
      path: "/",
      name: RT_HOME,
      component: Home,
      meta: {
        requiresAuth: true,
        title: MT_HOME,
      },
    },
    {
      path: "/dashboard",
      name: RT_DASHBOARD,
      component: Dashboard,
      meta: {
        requiresAuth: true,
        title: MT_DASHBOARD,
      },
      children:[
        {
          path: "/adminview",
          name: "adminview",
          component: ()=>import("../pages/AdminView.vue"),
          meta: {
            requiresAuth: true,
            title: "adminview",
          }
        }
      ]
    },
    {
      path: "/profile",
      name: RT_PROFILE,
      component: ()=>import("../pages/admin/AdminProfile.vue"),
      meta: {
        requiresAuth: true,
        title: MT_PROFILE,
      },
    },
    {
      path: "/:pathmatch(.*)*",
      name: RT_404,
      component: () => import("../pages/404.vue"),
      meta: {
        title: MT_404,
        layout: "NotFound",
      },
    }
  ],
});

function decodeJwt(token) {
  if (token) {
    const base64Payload = token.split(".")[1];
    const payloadBuffer = window.atob(base64Payload);
    return JSON.parse(payloadBuffer.toString());
  } else {
    return { exp: 0 };
  }
}

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");

  const parsedToken = decodeJwt(token);
  const isTokenExpired = parsedToken.exp < Date.now() / 1000;

  if (to.name !== RT_LOGIN && isTokenExpired) {
    store.commit("LOGOUT");
  } else if (!isTokenExpired && to.name === RT_LOGIN) {
    next({ name: from.name });
  } else {
    next();
  }
});

router.beforeResolve(async (to, from) => {
  await layoutMiddleware(to);
  document.title = to.meta.title;
});

export default router;